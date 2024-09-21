
# Product Management API

This is a simple Node.js and Express-based API for managing products, including the ability to create, retrieve, update, and delete products. It uses MongoDB as the database and Mongoose as the ODM (Object Data Modeling) library.

## Features

- Create a new product
- Retrieve all products
- Retrieve a product by ID
- Update an existing product by ID
- Delete a product by ID

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/download/) (v12 or later)
- [MongoDB](https://www.mongodb.com/)
- [Git](https://git-scm.com/)

## Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up environment variables**:

   Create a `.env` file in the root directory of your project and add the following:

   ```
   USERNAME=yourMongoDBUsername
   PASSWORD=yourMongoDBPassword
   ```

   Replace `yourMongoDBUsername` and `yourMongoDBPassword` with your actual MongoDB credentials.

4. **Run the application**:

   ```bash
   npm run dev
   ```

   The server will start on `http://localhost:3000`.

## API Endpoints

### 1. Root Endpoint

- **GET /** 
  - Description: Test the server is running
  - Response: `"Hello!"`

### 2. Get All Products

- **GET /products**
  - Description: Fetch all products in the database
  - Response: JSON array of products

### 3. Get Product by ID

- **GET /products/:id**
  - Description: Fetch a product by its ID
  - Params:
    - `id`: The ID of the product to retrieve
  - Response: JSON of the product object

### 4. Add a New Product

- **POST /products**
  - Description: Add a new product to the database
  - Body (JSON):
    ```json
    {
      "name": "Product Name",
      "quantity": 10,
      "price": 100,
      "image": "imageURL"
    }
    ```
  - Response: The created product object

### 5. Update a Product

- **PUT /products/:id**
  - Description: Update an existing product by its ID
  - Params:
    - `id`: The ID of the product to update
  - Body (JSON):
    ```json
    {
      "name": "Updated Product Name",
      "quantity": 5,
      "price": 150
    }
    ```
  - Response: The updated product object

### 6. Delete a Product

- **DELETE /products/:id**
  - Description: Delete a product by its ID
  - Params:
    - `id`: The ID of the product to delete
  - Response: The deleted product object

## MongoDB Connection

This project connects to a MongoDB database using Mongoose. The connection URI is stored in the `.env` file for security. Ensure you have created a MongoDB cluster and replaced the username and password with your own credentials in the `.env` file.

```js
mongoose.connect(`mongodb+srv://${username}:${password}@cluster.mongodb.net/Node-API?retryWrites=true&w=majority`)
```

## Error Handling

All endpoints return appropriate HTTP status codes and error messages in case of failures. For example:
- 404 if a product is not found.
- 500 for any server-side issues.

## License

This project is licensed under the ISC License.
