const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect("mongodb://localhost:27017/project_test", {
    serverSelectionTimeoutMS: 5000,
  });

  mongoose.connection.on("connected", () => {
    console.log("Connection to the database established");
  });

  mongoose.connection.on("error", (error) => {
    console.log("Error in connection:", error);
  });
}

module.exports = connectDB;
