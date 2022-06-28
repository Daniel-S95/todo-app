let connection = require("./connection-wrapper");

async function getAllAssignments() {
    let sql = `SELECT a.id, a.description, a.creation_date AS creationDate, a.customer_id AS customerId,
    c.name as customerName, a.is_done AS isDone FROM assignments a JOIN customers c ON c.id = a.customer_id ORDER BY a.is_done ASC, a.id ASC;`;
    let assignments = await connection.execute(sql);
    return assignments;
}

async function addAssignment(assignmentData) {
    let sql = 'INSERT INTO assignments (description, customer_id) VALUES (?, ?);';
    let parameters = [assignmentData.description, assignmentData.customerId];
    let assignmentResult = await connection.executeWithParameters(sql, parameters);
    return assignmentResult;
}

async function deleteAssignment(assignmentId) {
    let sql = 'DELETE FROM assignments WHERE (id = ?);';
    let parameters = [assignmentId];
    let assignmentResult = await connection.executeWithParameters(sql, parameters);
    return assignmentResult;
}

async function updateAssignmentStatus(assignmentId) {
    let sql = 'UPDATE assignments SET is_done = !is_done WHERE (id = ?);';
    let parameters = [assignmentId];
    let assignmentResult = await connection.executeWithParameters(sql, parameters);
    return assignmentResult;
}



module.exports = {
    getAllAssignments,
    addAssignment,
    deleteAssignment,
    updateAssignmentStatus
};