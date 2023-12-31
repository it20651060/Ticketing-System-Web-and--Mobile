const express = require("express"); // Express web server framework
const mongoose = require("mongoose"); // MongoDB
const bodyParser = require("body-parser"); // Parses the request body to be a readable json format
const cors = require("cors"); // Cross Origin Resource Sharing
const dotenv = require("dotenv"); // Loads environment variables from a .env file into process.env
const app = express(); // Initialize the Express application

require("dotenv").config(); // Loads environment variables from a .env file into process.env

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL; // MongoDB URL

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection; // MongoDB Connection
connection.once("open", () => {
  console.log("MongoDB Database Connection Successfull"); // Display in console if connection is successful
});

 // add passengers route
 const passengersRouter = require("./routes/passengersRouter");
 app.use("/passengers", passengersRouter);

// // display blood volumes route
// const bloodVolumesRouter = require("./routes/bloodVolumesRouter");
// app.use("/bloodvolumes", bloodVolumesRouter);

// // Institution
// const institutionRouter = require(`./routes/institutionRouter`);
// app.use("/addRequest", institutionRouter);

// // Institution Regitration
// const institutionRegRouter = require(`./routes/institutionRegRouter`);
// app.use("/instreg", institutionRegRouter);

// //seeker
// const addSeekerRoute = require("./routes/seekerRoutes");
// app.use("/Seeker", addSeekerRoute);

// //seeker Blood Request routes
// const bloodRequestRoutes = require("./routes/seekerBloodRequestRoutes");
// app.use("/SeekerBloodRequest", bloodRequestRoutes);

// //Donor
// const usersRoutes = require("./routes/donorUser");

// // route middleware
// app.use("/donorUser", usersRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port number : ${PORT}`); // Dipaly in console if server is running
});
