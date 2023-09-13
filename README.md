# Person API Documentation

## Introduction

The Person API is a simple API for managing person names. It allows users to perform basic CRUD (Create, Retrieve, Update, Delete) operations on person names. This documentation provides detailed information on how to set up and use the API.

## Prerequisites

Before you can run the Person API on your local computer, you need to ensure that the following prerequisites are installed:

- [Node.js](https://nodejs.org/)

- [MongoDB](https://www.mongodb.com/)

## Installation

To get started with the Person API, follow these steps:

1. Clone the repository to your local machine using Git:

   ```bash
   git clone https://github.com/DevYoma/HNG2.git

2. Navigate to the project directory:

   ```bash
   cd HNG2

3. Install the project dependencies using npm (Node Package Manager):

   ```bash
   npm install OR npm i 

## Configuration

Before running the API, you need to configure it. Create a .env file in the project directory and specify the following environment variable

1. Set up your DATABASE_URI
   
    ```bash
    DATABASE_URI=<your-mongodb-connection-string> 

## Running the API
1. To start the API, run the command below

   ```bash
   npm start

2. This will make the API available at **http://localhost:3500**


## API Endpoints & Sample Usage
### Create New Person

- **URL:** `/`
- **Method:** POST
- **Request Body:**

   ```json
   {
      "name": "Yoma"
   }
   ```
- **Response**
   ```json
   {
      "message": "New Person Yoma created"
   }
   ```

### Retrieve specific person

- **URL:** `/:id`
- **Method:** GET

- **Response**
   ```json
   {
      "_id": <person-id>,
      "name": "Yoma",
      "__v": 0
   }
   ```

### Update person by Id

- **URL:** `/:id`
- **Method:** PUT
- **URL Request Parameter:**
  ```react
   http://localhost:3500/id
  ```
- **Request Body:**

   ```json
   {
      "name": "Updated Name"
   }
   ```

- **Response**
   ```json
   {
      "_id": <person-id>,
      "name": "Updated Name",
      "__v": 0
   }
   ```

### Delete person by Id

- **URL:** `/:id`
- **Method:** DELETE
- **URL Request Parameter:**
  ```react
   http://localhost:3500/id
  ```
- **Request Body:**

   ```bash
   http://localhost:3500/id
   ```

- **Response**
   ```json
       "message": "User deleted Successfully"
   ```