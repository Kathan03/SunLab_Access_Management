import { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import './App.css';

function Admin() {
  const [accesses, setAccesses] = useState([]);
  const [studentId, setStudentId] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filteredAccesses, setFilteredAccesses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 11;

  const accessesCollectionRef = collection(db, "Accesses");

  useEffect(() => {
    const getAccesses = async () => {
      const data = await getDocs(accessesCollectionRef);
      setAccesses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getAccesses();
  }, []);

  const filterAccesses = () => {
    const filtered = accesses.filter((access) => {
      const accessDate = new Date(access.timestamp.seconds * 1000);
      const matchesStudentId = studentId ? access.Student_ID === studentId : true;
      const matchesStartDate = startDate ? accessDate >= new Date(startDate) : true;
      const matchesEndDate = endDate ? accessDate <= new Date(endDate) : true;
      return matchesStudentId && matchesStartDate && matchesEndDate;
    });
    setFilteredAccesses(filtered);
    setCurrentPage(1);
  };

  const downloadCSV = () => {
    const data = filteredAccesses.length > 0 ? filteredAccesses : accesses;
    const csvRows = [
      ['Student ID', 'Timestamp'],
      ...data.map(access => [
        access.Student_ID,
        new Date(access.timestamp.seconds * 1000).toLocaleString()
      ])
    ];
    const csvString = csvRows.map(row => row.join(',')).join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'access_records.csv');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const totalPages = Math.ceil((filteredAccesses.length > 0 ? filteredAccesses.length : accesses.length) / recordsPerPage);
  const startIndex = (currentPage - 1) * recordsPerPage;
  const currentAccesses = (filteredAccesses.length > 0 ? filteredAccesses : accesses).slice(startIndex, startIndex + recordsPerPage);

  return (
    <div className="AdminContainer">
      <div className="FilterSection">
        <h1>Filter Access Records</h1>
        <label className="date">Filter by ID</label>
        <input
          type="text"
          placeholder="Filter by Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="filter-input"
        />
        <label className="date">Start Date:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="filter-input"
        />
        <label className="date">End Date:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="filter-input"
        />
        <button className="filter-button" onClick={filterAccesses}>
          Filter
        </button>
        <button className="filter-button" onClick={downloadCSV} style={{ marginTop: '10px' }}>
          Download Records
        </button>
      </div>
      <div className="RecordsSection">
        <h2>Access Records</h2>
        <table className="records-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {currentAccesses.map((access) => (
              <tr key={access.id}>
                <td>{access.Student_ID}</td>
                <td>{new Date(access.timestamp.seconds * 1000).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-button ${currentPage === index + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Admin;
