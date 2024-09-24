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
This is the main entry point of the application, setting up the routing structure using React Router. It defines three routes: the landing page, the main page for adding records, and the admin page for managing access records. The overall layout and styling are defined here, linking to the corresponding components.

#### LandingPage.js:
This component serves as the initial page users encounter. It welcomes users to the access management system and provides buttons to navigate to either the main page for adding records or the admin page. It also manages admin credentials input for secure access.

#### Admin.js:
This component allows authorized users to view and filter access records. It retrieves data from Firestore and displays it in a table format. Users can filter records by student ID and date range, and also download the records as a CSV file. Pagination is implemented to manage the display of records, showing only 11 at a time for easier navigation.

#### Main.js:
This component handles the submission of new access records. It collects the student ID and automatically generates a timestamp using the current system time. The records are then added to Firestore. The form ensures that all fields are required for submission.

#### App.css:
This file contains the styles for the entire application. It defines the layout, colors, and visual elements of the components, ensuring a consistent and appealing user interface. Styles include body font settings, button appearances, table designs, and sections for admin filtering and record display.

...


