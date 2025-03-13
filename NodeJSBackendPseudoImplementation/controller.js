const customerService = require('./service');


// Get all customers
const getAll = async (req, res) => {
    try {
        const {dto,tokens} = await customerService.getAllCustomers();
        if (dto.length > 0) {
            res.status(200).json({ customers: dto, tokens });
            //Note:customers is the key, and dto is the value associated with that key.
            //e.g., Json: {customers:[...]
            //             tokens:[...]
            //              }
            //If it is just {dto, tokens}, then the return JSON is 
            //      JsonL {dto:[...]
            //             tokens:[...]
            //              } 
        } else {
            res.status(404).send('No customers found');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Create a new customer
const createCustomer = async (req, res) => {
    try {
        const customer = await customerService.createCustomer(req.body);
        res.status(201).json(customer);
    } catch (err) {
        res.status(500).send(err);
    }
};

// Update an existing customer
const updateCustomer = async (req, res) => {
    try {
        const token = req.params.token
        const dto = req.body;   
       
        const customer = await customerService.updateCustomer(dto, token);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(400).send('Invalid customer ID');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Delete a customer
const deleteCustomer = async (req, res) => {
    try {
        
        const token = req.params.token
        console.log(token)
        const customer = await customerService.deleteCustomer(token);
        if (customer) {
            res.status(200).json(customer);
        } else {
            res.status(400).send('Invalid customer ID');
        }
    } catch (err) {
        res.status(500).send(err);
    }
};

// Get paginated customers
const getCustomerPage = async (req, res) => {
    try {
        const pageNo = parseInt(req.query.pageNo) || 0;
        const pageSize = parseInt(req.query.pageSize) || 7;
        const {dto,tokens} = await customerService.getCustomerPage(pageNo + 1, pageSize); // Adjust for zero-based index
        res.status(200).json({ customers: dto, tokens });
    } catch (err) {
        res.status(500).send(err);
    }
};
// Search customers by text
const searchCustomers = async (req, res) => {
    try {
        const {dto,tokens} = await customerService.searchCustomers(req.params.searchText);
        res.status(200).json({ customers: dto, tokens });
    } catch (err) {
        res.status(500).send(err);
    }
};

const searchCustomersPaginated = async (req, res) => {
    try {
        const pageNo = parseInt(req.query.pageNo) || 0;
        const pageSize = parseInt(req.query.pageSize) || 7;
        const {dto,tokens} = await customerService.findCustomerEntityBySearchTextPaginated(pageNo + 1, pageSize,req.params.searchText);
        res.status(200).json({ customers: dto, tokens });
    } catch (err) {
        res.status(500).send(err);
    }
};

module.exports = {
getAll,
createCustomer,
updateCustomer,
deleteCustomer,
getCustomerPage,
searchCustomers,
searchCustomersPaginated
};
