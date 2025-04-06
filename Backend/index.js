import express from 'express';
import authRoute from './router/auth-routes.js';
import contactRoute from './router/contat-router.js';
import connectDb from './utils/db.js';
import errorMiddleWare from './middleware/error-middleware.js';

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoute);
app.use("/api/form",contactRoute)

app.use(errorMiddleWare)

// Connect to the database and start the server
connectDb().then(() => {
  app.listen(port, () => {
    console.log(`App listening on port ${port}`);
  });
}).catch((error) => {
  console.log("Connection failed", error);
});