const express = require("express");
const controller = require("./controller")

const dataRouters = express.Router();

dataRouters.get('/all',controller.getAll)
dataRouters.post('/',controller.createCustomer)
dataRouters.put('/:token', controller.updateCustomer)
dataRouters.delete('/:token', controller.deleteCustomer)
dataRouters.get('/page', controller.getCustomerPage)
dataRouters.get('/search/:searchText', controller.searchCustomers)
module.exports = dataRouters;