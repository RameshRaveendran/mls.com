// main requires
const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const session = require("express-session");
const MongoStore = require('connect-mongo').default;





dotenv.config();
connectDB();

// local requires
const authRoutes = require("./routes/auth.routes");
const testRoutes = require("./routes/test.routes");
const ownerRoutes = require("./routes/owner.routes");



// create app
const app = express();

// middleware
app.use(express.json());



// session creation
app.use(
    
  session({
    secret: "medical_lab_secret",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60, // 1 hour
    },
  })
);

// routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/owner", ownerRoutes);

// test route
app.get("/", (req, res) => {
  res.send("Medical Lab System Backend Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
