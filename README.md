### CRUD Operations in ReactJS

CRUD stands for Create, Read, Update, and Delete — the four fundamental operations for managing data in web applications. 
Here's a brief overview of how each operation is typically handled in a ReactJS application:

1. Create
   - Purpose: The "Create" operation involves adding new data to your application's backend or database. In React,
   - this often involves a form where users input information. When the form is submitted, the data is sent to the backend using an HTTP POST request.
   - Process: The user enters data into a form, the form data is validated, and then sent to the server to be saved.

2. Read
   - Purpose: The "Read" operation is about retrieving and displaying data from the backend.
   - In a React application, this usually happens when the component mounts (loads) and makes an HTTP GET request to fetch data.
   - Process: Data is fetched from the backend, stored in the component's state,
   - and rendered to the UI. This allows users to view the existing data stored in the database.

3. Update
   - Purpose: "Update" involves modifying existing data.
   - In React, this is commonly done through a form that is pre-populated with the current data.
   - After the user makes changes, the updated data is sent back to the server using an HTTP PUT or PATCH request.
   - Process: Users edit data via a form, and upon submission, the modified data is sent to the server, which updates the existing record in the database.

4. Delete
   - Purpose: The "Delete" operation is used to remove data from the backend.
   - In a React application, this is typically triggered by a user action, such as clicking a "Delete" button, which sends an HTTP DELETE request to the server.
   - Process: Upon user confirmation, the specific data entry is deleted from the database, and the UI is updated to reflect the change.

Key Points:
- State Management: React's state is used to hold the data fetched from or to be sent to the backend,
- enabling the UI to re-render in response to data changes.
- HTTP Methods: The interactions with the backend typically involve the following HTTP methods:
- POST for Create, GET for Read, PUT/PATCH for Update, and DELETE for Delete.
- User Interaction: Each CRUD operation is usually triggered by user actions such as form submissions, button clicks, or page loads.
