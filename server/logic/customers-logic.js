const customersDal = require('../dal/customers-dal');

async function getAllCustomers() {
    const customers = await customersDal.getAllCustomers();
    return customers;
}

module.exports = {
    getAllCustomers,
};