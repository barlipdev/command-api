const express = require("express");
const cors = require("cors");
const app = express();

corsOptions = {
    origin: "http://localhost:8080"
};

app.use(cors(corsOptions));
app.use(express.json())
app.use(express.urlencoded({extended: true}));
require("./routes/routes")(app);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const db = require("./model");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });