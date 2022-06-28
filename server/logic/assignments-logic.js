const assignmentsDal = require('../dal/assignments-dal');

async function getAllAssignments() {
    const assignments = await assignmentsDal.getAllAssignments();
    return assignments;
}

async function addAssignment(assignmentData) {
    let { customerId, description } = assignmentData;

    if (!customerId || !description) {
        throw new Error('Please fill the form correctly');
    }

    if (description.length > 500) {
        throw new Error('Description is too long');
    }

    const assignment = await assignmentsDal.addAssignment(assignmentData);
    return assignment;
}

async function deleteAssignment(assignmentId) {
    await assignmentsDal.deleteAssignment(assignmentId);
}

async function updateAssignmentStatus(assignmentId) {
    await assignmentsDal.updateAssignmentStatus(assignmentId);
}

module.exports = {
    getAllAssignments,
    addAssignment,
    deleteAssignment,
    updateAssignmentStatus
};