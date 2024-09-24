# SunLab_Access_Management

The Firestore database features a collection named **Accesses**, which is designed to log student access events. Each document within this collection includes the following attributes:

- **studentID** (String): A unique identifier for each student, enabling precise tracking and retrieval of individual access records.

- **timestamp** (Timestamp): A Firestore timestamp that captures the exact date and time of the access event, facilitating temporal analysis and reporting.

This schema allows for efficient querying and indexing, enabling operations such as filtering by student ID or retrieving access logs within specific time frames. The structure supports scalability and real-time updates, making it ideal for tracking student engagement in various contexts.
