// main requires
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();
connectDB();

// local requires
const authRoutes = require("./routes/auth.routes");



// create app
const app = express();

// middleware
app.use(express.json());
// routes
app.use("/api/auth", authRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Medical Lab System Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
