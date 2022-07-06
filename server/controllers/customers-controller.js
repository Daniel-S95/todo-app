const express = require("express");
const router = express.Router();
const customersLogic = require("../logic/customers-logic");

router.get("/", async (request, response) => {
    try {
        const customers = await customersLogic.getAllCustomers();
        response.json(customers);
    }

    catch (e) {
        console.error(e);
        response.status(500).send(e.message);
    }
});

module.exports = router;