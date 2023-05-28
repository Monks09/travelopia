# Travelopia

A brand providing extraordinary travel experiences for customers.

## Getting Started

To develop the application locally, follow the following steps:

1. Install all dependencies

   ```bash
   For front-end
   npm install

   For back-end
   npm install
   ```

2. Start the front-end development server.
   ```bash
   # In the root of the repository
   npm start
   ```
3. Start a MongoDB database server and acquire the connection string.

   You can use [MongoDB Atlas](https://www.mongodb.com/atlas/database) or start a local instance via a [local installation](https://www.mongodb.com/try/download/community) of MongoDB. Make sure to whitelist your IP address while using Atlas.

4. Create a .env file in the backend folder and add your MongoDB connection url to it
   ```bash
   # Inside /back-end
   cp .env.example .env
   ```
   `.env`:
   ```env
   # Database (enter your connection string below)
   MONGODB_URI=mongodb://localhost/travelopia
   ```
5. Star the back-end development server.
   ```bash
   # Inside /back-end
   npm run dev
   ```

Go to http://localhost:3000 to see the running web application.

The back-end server is available at http://localhost:5000.

## Deployment

For deploying, follow the following steps:

1. Create a production build for the React-based front-end. It will automatically be copied to the `back-end` directory.
   ```bash
   # Inside /front-end
   npm run build
   ```
2. Start the back-end production server. It will automatically host the front-end with itself.
   ```bash
   # Inside /back-end
   npm start
   ```

## Testing

To run the tests, run the following command inside the `back-end` directory:

```bash
# Inside /back-end
npm test
```
