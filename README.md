# Crypto RSI Tracker - Backend

A simple backend application built with Express.js that demonstrates REST API development, middleware, routing, validation, and frontend-backend communication.

This project was developed as part of my backend development internship work.

---

## Features

- Express.js Server
- REST API Endpoints
- GET Requests
- POST Requests
- Input Validation Middleware
- Controllers and Routes
- Frontend Form Integration
- JSON Responses
- Temporary Data Storage Using Arrays
- Clean Project Structure

---

## Technologies Used

- Node.js
- Express.js
- JavaScript
- HTML
- Git & GitHub

---

## Project Structure

```
crypto-backend/

│
├── public/
│     └── index.html
│
├── server/
│
│    ├── controllers/
│    │      └── userController.js
│    │
│    ├── data/
│    │      └── users.js
│    │
│    ├── middleware/
│    │      └── validation.js
│    │
│    ├── routes/
│    │      └── userRoutes.js
│    │
│    └── server.js
│
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

Move into the project directory:

```bash
cd crypto-backend
```

Install the required dependencies:

```bash
npm install
```

---

## Running the Project

Start the server by running:

```bash
node server/server.js
```

Alternatively, if you have Nodemon installed:

```bash
npx nodemon server/server.js
```

If everything is working correctly, you should see:

```bash
Server is running on http://localhost:3000
```

---

## API Endpoints

### Home Route

```
GET /
```

Displays the frontend form used to add users.

---

### Get All Users

```
GET /api/users
```

Returns all the users stored in the application.

Example:

```json
[
    {
        "name": "Malik",
        "email": "malik@gmail.com"
    }
]
```

---

### Add a User

```
POST /api/users
```

Request Body:

```json
{
    "name": "Malik",
    "email": "malik@gmail.com"
}
```

Success Response:

```json
{
    "message": "User added successfully!"
}
```

---

## Input Validation

The application validates:

- Empty fields
- Invalid email addresses

Examples:

```
Name and Email are required.
```

and

```
Please enter a valid email.
```

---

## Testing the Project

Open your browser and visit:

```
http://localhost:3000
```

Fill in the form and submit your details.

To view the stored users, visit:

```
http://localhost:3000/api/users
```

---

## Note

This project uses temporary in-memory storage for demonstration purposes. The data will reset whenever the server is restarted.

No database is used in this version of the project.

---

## Author

Malik Ghani Ur Rehman

GitHub:
https://github.com/ghaniurrehman1
