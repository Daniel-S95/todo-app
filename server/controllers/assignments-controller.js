const express = require("express");
const router = express.Router();
const assignmentsLogic = require("../logic/assignments-logic");

router.get("/", async (request, response) => {
    try {
        const assignments = await assignmentsLogic.getAllAssignments();
        response.json(assignments);
    }

    catch (e) {
        console.error(e);
        response.status(500).send(e.message);
    }
});

router.post("/", async (request, response) => {
    try {
        const assignmentData = request.body;
        const assignment = await assignmentsLogic.addAssignment(assignmentData);

        response.json(assignment);
    }

    catch (e) {
        console.error(e);
        response.status(500).send(e.message);
    }
});

router.delete("/:id", async (request, response) => {
    try {
        const assignmentId = request.params.id;
        await assignmentsLogic.deleteAssignment(assignmentId);

        response.json();
    }

    catch (e) {
        console.error(e);
        response.status(500).send(e.message);
    }
});

router.put("/:id", async (request, response) => {
    try {
        const assignmentId = request.params.id;
        await assignmentsLogic.updateAssignmentStatus(assignmentId);

        response.json();
    }

    catch (e) {
        console.error(e);
        response.status(500).send(e.message);
    }
});

module.exports = router;