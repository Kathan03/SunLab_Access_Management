import { useState } from 'react';
import { db } from './firebase-config';
import { collection, addDoc } from 'firebase/firestore';
import './App.css';

function Main() {
  const [studentId, setStudentId] = useState('');
  const accessesCollectionRef = collection(db, "Accesses");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newTimestamp = new Date(); // Use current timestamp
    await addDoc(accessesCollectionRef, {
      Student_ID: studentId,
      timestamp: newTimestamp,
    });

    setStudentId('');
  };

  return (
    <div className="MainContainer">
      <div className="FormSection">
        <h1>Add New Record</h1>
        <form onSubmit={handleSubmit}>
          <label>Student ID</label>
          <input
            type="text"
            placeholder="Enter Student ID"
            value={studentId}
            onChange={(e) => setStudentId(e.target.value)}
            required
            className="form-input"
          />
          <button type="submit" className="submit-button">Add</button>
        </form>
      </div>
    </div>
  );
}

export default Main;
