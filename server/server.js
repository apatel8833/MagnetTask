// libraries consts
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

// file consts
const connect = require("./database/mongoDb.js");

// router consts
const userRouter = require("./routes/userRouter.js");

// app
const app = express();
const port = 5000;
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors());
app.use(userRouter);

connect(); //you will have to edit this in ./databse/mongoDb.js

app.listen(port, () => console.log(`server started on port ${port}`));

