let connection = require("./connection-wrapper");

async function getAllCustomers() {
    let sql = 'SELECT id, name, customer_type as customerType, phone, email FROM customers;';
    let customers = await connection.execute(sql);
    return customers;
}

module.exports = {
    getAllCustomers,
};