# Task Manager App

## Overview

The Task Manager App is a full-stack web application built with Flask for the backend API and React for the frontend. It allows users to manage tasks by providing functionalities such as creating, updating, deleting, and viewing task details.

## Features

- **List View:** Display all tasks with the ability to delete a task.
- **Details View:** Display details of a single task.
- **Add/Edit View:** A form to add a new task or edit an existing one.
- **Responsive Design:** Implemented using Bootstrap framework for optimal viewing across devices.
- **CRUD Operations:** Connects to the backend API to perform Create, Read, Update, and Delete operations on tasks.

## Technologies Used

- **Backend:**
  - Flask: Python-based web framework for building the API.
  - SQLAlchemy: ORM for interacting with the database.
  - PostgreSQL: Relational database for storing tasks.

- **Frontend:**
  - React: JavaScript library for building user interfaces.
  - Axios: HTTP client for making requests to the backend API.
  - Bootstrap: CSS framework for responsive design.

## Setup Instructions

1. Clone the repository to your local machine.
2. Navigate to the `frontend` directory and run `npm install` to install dependencies.
3. Navigate to the `backend` directory and set up the Python environment using a virtual environment.
4. Install Python dependencies by running `pip install -r requirements.txt`.
5. Configure the Flask application to connect to your PostgreSQL database.
6. Start the Flask backend server by running `python app.py`.
7. Start the React frontend server by navigating to the `frontend` directory and running `npm start`.
8. Access the application in your web browser at `http://localhost:3000`.

## Contributors

- [Atharva Choudhari](https://github.com/Athu06)
