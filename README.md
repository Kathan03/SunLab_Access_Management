# SunLab_Access_Management

## To run the project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Login Credential To access Admin Portal

Credential #1: "Kathan"
Credential #2: "Prof. Matthew"

**Note**: Only these two credentials are valid and they are case sensitive.


## Database Description

I have used Firebase for this project.

The Firestore database features a collection named **Accesses**, which is designed to log student access events. Each document within this collection includes the following attributes:

- **studentID** (String): A unique identifier for each student, enabling precise tracking and retrieval of individual access records.

- **timestamp** (Timestamp): A Firestore timestamp that captures the exact date and time of the access event, facilitating temporal analysis and reporting.

This schema allows for efficient querying and indexing, enabling operations such as filtering by student ID or retrieving access logs within specific time frames. The structure supports scalability and real-time updates, making it ideal for tracking student engagement in various contexts.


## File Description

#### App.js:
#### LandingPage.js:
#### Admin.js:
#### Main.js:
#### App.css:
...


