

# To-Do Application

## Description

This project is a simple to-do application that allows users to create, list, and edit to-do items. Each to-do item consists of a title, start date, and end date. The backend is built using Node.js with Express and MongoDB, while the frontend is developed using ReactJS with CSS/Bootstrap for a responsive design.

## Features

- Create a new to-do item
- List all to-do items
- Edit a specific to-do item

## Technologies Used

- Backend: Node.js, Express, MongoDB
- Frontend: ReactJS, Bootstrap, Axios
- Other: Postman for API testing

## Setup Instructions


### Backend Setup

1. **Clone the repository:**
   ```sh
   git clone https://github.com/your-username/todo-app.git
   cd todo-app
   ```

2. **Install backend dependencies:**
   ```sh
   cd backend
   npm install
   ```

3. **Start MongoDB:**
   Ensure MongoDB is running on your local machine. You can start MongoDB using the following command if you have it installed locally:
   ```sh
   mongod
   ```

4. **Start the backend server:**
   ```sh
   npm start
   ```

   The backend server will start on `http://localhost:5000`.

### Frontend Setup

1. **Navigate to the frontend directory:**
   ```sh
   cd ../frontend
   ```

2. **Install frontend dependencies:**
   ```sh
   npm install
   ```

3. **Start the frontend server:**
   ```sh
   npm start
   ```

   The frontend server will start on `http://localhost:3000`.

## API Endpoints

### Create a New To-Do Item

- **Method:** `POST`
- **URL:** `http://localhost:5000/api/todos`
- **Body:**
  ```json
  {
      "title": "Sample Task",
      "startDate": "2024-06-01",
      "endDate": "2024-06-05"
  }
  ```
- **Response:**
  ```json
  {
      "_id": "60c72b2f5f1b2c001c8d2f04",
      "title": "Sample Task",
      "startDate": "2024-06-01T00:00:00.000Z",
      "endDate": "2024-06-05T00:00:00.000Z",
      "__v": 0
  }
  ```

### List All To-Do Items

- **Method:** `GET`
- **URL:** `http://localhost:5000/api/todos`
- **Response:**
  ```json
  [
      {
          "_id": "60c72b2f5f1b2c001c8d2f04",
          "title": "Sample Task",
          "startDate": "2024-06-01T00:00:00.000Z",
          "endDate": "2024-06-05T00:00:00.000Z",
          "__v": 0
      }
  ]
  ```

### Edit a Specific To-Do Item

- **Method:** `PUT`
- **URL:** `http://localhost:5000/api/todos/:id`
- **Body:**
  ```json
  {
      "title": "Updated Task",
      "startDate": "2024-06-01",
      "endDate": "2024-06-06"
  }
  ```
- **Response:**
  ```json
  {
      "_id": "60c72b2f5f1b2c001c8d2f04",
      "title": "Updated Task",
      "startDate": "2024-06-01T00:00:00.000Z",
      "endDate": "2024-06-06T00:00:00.000Z",
      "__v": 0
  }
  ```

### Sample Data

Here are sample responses for each API endpoint:

#### Create a New To-Do Item

**Request Body:**
```json
{
    "title": "Sample Task",
    "startDate": "2024-06-01",
    "endDate": "2024-06-05"
}
```
**Response:**
```json
{
    "_id": "60c72b2f5f1b2c001c8d2f04",
    "title": "Sample Task",
    "startDate": "2024-06-01T00:00:00.000Z",
    "endDate": "2024-06-05T00:00:00.000Z",
    "__v": 0
}
```

#### List All To-Do Items

**Response:**
```json
[
    {
        "_id": "60c72b2f5f1b2c001c8d2f04",
        "title": "Sample Task",
        "startDate": "2024-06-01T00:00:00.000Z",
        "endDate": "2024-06-05T00:00:00.000Z",
        "__v": 0
    }
]
```

#### Edit a Specific To-Do Item

**Request Body:**
```json
{
    "title": "Updated Task",
    "startDate": "2024-06-01",
    "endDate": "2024-06-06"
}
```
**Response:**
```json
{
    "_id": "60c72b2f5f1b2c001c8d2f04",
    "title": "Updated Task",
    "startDate": "2024-06-01T00:00:00.000Z",
    "endDate": "2024-06-06T00:00:00.000Z",
    "__v": 0
}
```

