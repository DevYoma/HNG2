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


## API Endpoints
### Create New Person

- **URL:** `/api`
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
      "message": "New Person Yoma created", 
      "person": {
         "name": "Yoma", 
         "_id": "xxxxxxxxxxxxxxxxxxxxxxxx",
         "_v": 0
      }
   }
   ```

### Retrieve specific person

- **URL:** `/api/:id`
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

- **URL:** `/api/:id`
- **Method:** PUT
- **URL Request Parameter:**
  ```react
   http://localhost:3500/api/id
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

- **URL:** `/api/:id`
- **Method:** DELETE
- **URL Request Parameter:**
  ```bash
   http://localhost:3500/api/id
  ```

- **Response**
   ```json
   "message": "<person-name> deleted Successfully"
   ```

## Sample Usage
### Create New Person

- **URL:** `/api`
- **Method:** POST
- **Request Body:**

   ```json
   {
      "name": "Yoma"
   }
   ```
- **Response(200)**
   ```json
   {
      "message": "New Person Yoma created",
      "person": {
         "name": "Yoma",
         "_id": "65019c5f7ff6b6379a5a2f23",
         "__v": 0
      }
   }
   ```
- **Response(Error)**
  - HTTP Status Code: 400: Invalid person data received
  - HTTP Status Code: 409: Duplicate name

### Retrieve specific person

- **URL:** `/api/:id`
- **Method:** GET
- **URL Request Parameter:**
  ```bash
   http://localhost:3500/api/65019c5f7ff6b6379a5a2f23
  ```

- **Response(200)**
   ```json
   {
      "_id": "65019c5f7ff6b6379a5a2f23",
      "name": "Yoma",
      "__v": 0
   }
   ```
- **Response(Error)**
  - HTTP Status Code 400
      ```json
         {
            "message": "No Person matches ID 65019c5f7ff6b6379a5a2f22"
         }
      ```

### Update person by Id

- **URL:** `/api/65019c5f7ff6b6379a5a2f23`
- **Method:** PUT
- **URL Request Parameter:**
  ```bash
   http://localhost:3500/api/65019c5f7ff6b6379a5a2f23
  ```
- **Request Body:**

   ```json
   {
      "name": "Emore Yoma"
   }
   ```

- **Response(200)**
   ```json
   {
      "_id": "65019c5f7ff6b6379a5a2f23",
      "name": "Emore Yoma",
      "__v": 0
   }
   ```
- **Response(Error)**
  - HTTP Status Code 400 (wrong ID entered)
  
      ```bash
         {
            "message": "No Person matches ID undefined"
         }
      ```
   - HTTP Status Code 400 (No Name entered)
      ```bash
         {
            "message": "Person Name required"
         }
      ```

### Delete person by Id

- **URL:** `/api/65019c5f7ff6b6379a5a2f23`
- **Method:** DELETE
- **URL Request Parameter:**
  ```bash
   http://localhost:3500/api/65019c5f7ff6b6379a5a2f23
  ```

- **Response(Success)**
   ```json
      {
         "message": "Emore Yoma deleted Successfully",
         "person": {
            "_id": "65019c5f7ff6b6379a5a2f23",
            "name": "Emore Yoma",
            "__v": 0
         }
      }
   ```

- **Response(Error)**
   - HTTP Status Code 400
      ```bash
         {
            "message": "No Person matched ID 65019c5f7ff6b6379a5a2f22"
         }
      ```

