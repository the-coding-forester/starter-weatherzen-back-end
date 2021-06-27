const observationsRouter = require('./observations/observations.router');
const express = require("express");
const cors = require("cors");

app.use("/observations", observationsRouter);

const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");

const app = express();

app.use(cors())
app.use(express.json());


app.use(notFound);
app.use(errorHandler);

module.exports = app;
