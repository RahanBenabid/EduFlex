// Import required modules
const cors = require("cors");
const express = require("express");

const courseRoute = require("./routes/Course.js");
const onlineCourseRoute = require("./routes/onlineCourse.js");
const signupRoute = require("./routes/Signup");
const loginRoute = require("./routes/Login.js");
const authentiatedRoute = require('./routes/Authenticated.js');
const QnARoute = require('./routes/QnA.js');

const mailRoute = require('./scripts/mail.js');
const ToDo = require('./controller/ToDo.js');

const connectDB = require('./configuration/dbConfig.js');
const { createAdminAccount } = require('./scripts/setup.js');
const bodyParser = require("body-parser");

// Create an Express app
const app = express();

// Use CORS middleware before other middleware
app.use(cors({ origin: 'http://localhost:5173' }));

// Use body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define routes
app.use("/course", courseRoute); // Define /course route first
app.use("/onlineCourse", onlineCourseRoute); 
app.use("/user", signupRoute);
app.use("/auth", loginRoute);
app.use("/api", authentiatedRoute);
app.use("/todo", ToDo); 
app.use("/QnA", QnARoute); 
app.use("/send-email", mailRoute); 

// Connect to the database
connectDB();

// Create the admin account
createAdminAccount();

// Define the PORT
const PORT = process.env.PORT || 3000;

// Start the app
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
