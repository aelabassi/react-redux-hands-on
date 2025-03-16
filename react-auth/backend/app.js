const bodyParser = require("body-parser");
const express = require("express");

const eventRoutes = require("./routes/events");
const authRoutes = require("./routes/auth");

const PORT = 8080;
const HOST = "localhost";
const app = express();

app.use(bodyParser.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,PATCH,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
  next();
});

app.use(authRoutes);

app.use("/events", eventRoutes);

app.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong.";
  res.status(status).json({ message: message });
});

app.listen((PORT, HOST), () => {
  console.log(`Server running at http://${HOST}:${PORT}`);
});
