const express = require("express");
const cors = require("cors");
const server = express();
const customersController = require("./controllers/customers-controller");
const assignmentsController = require("./controllers/assignments-controller");

server.use(cors({ origin: "http://localhost:4200" }));

server.use(express.json());

server.use("/customers", customersController);
server.use("/assignments", assignmentsController);

server.listen(3001, () => { console.log("Listening on http://localhost:3001") });