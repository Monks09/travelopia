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
   # cd front-end
   npm start
   ```
3. Start a MongoDB database server and acquire the connection string.

   You can use [MongoDB Atlas](https://www.mongodb.com/atlas/database) or start a local instance via a [local installation](https://www.mongodb.com/try/download/community) of MongoDB. Make sure to whitelist your IP address while using Atlas.

4. Create a .env file in the backend folder and add your MongoDB connection url to it

   ```bash
   # Inside /back-end/.env
   const CONNECTION_URL = <your_mongodb_url>
   ```

5. Star the back-end development server.
   ```bash
   # Inside /back-end
   node app.js
   ```

Go to http://localhost:3000 to see the running web application.

The back-end server is available at http://localhost:3030.

## Deployment

For deploying, follow the following steps:

1. The frontend can be deployed on Netlify, for that create a production build and follow the steps for deployment on netlify.

2. For backend deployment platforms such as render or cyclic can be used.

Refer this doc for deployment on render: [Render Deployment](https://www.freecodecamp.org/news/how-to-deploy-nodejs-application-with-render/)

## Testing

To run the tests, run the following command inside the `front-end` directory:

```bash
# Inside /front-end
npm test
```
