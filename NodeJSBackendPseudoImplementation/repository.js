const Customer = require('./model');

class CustomerRepository {
    async findById(id) {
        return await Customer.findById(id);
    }

    async findByEmail(email) {
        return await Customer.find({ email });
    }

    async findAll() {
        return await Customer.find();
    }

    //Search
    async findCustomerEntityBySearchText(searchText) {
        const regex = new RegExp(searchText, 'i'); //case-insensitive
        return await Customer.find({
            $or: [
                { firstName: regex },
                { lastName: regex },
                { email: regex },
                { $expr: { $regexMatch: { input: { $concat: ['$firstName', ' ', '$lastName'] }, regex: searchText, options: 'i' } } }
            ]
        });
    }

    async findByFirstName(firstName) {
        return await Customer.find({ firstName });
    }

    async findByLastName(lastName) {
        return await Customer.find({ lastName });
    }

    async findByBalance(balance) {
        return await Customer.find({ balance });
    }

    async save(customerEntity) {
        const customer = new Customer(customerEntity);
        return await customer.save();
    }

    async deleteById(id) {
        return await Customer.findByIdAndDelete(id);
    }

    async findByIdAndUpdate(id, update, options) {
        return await Customer.findByIdAndUpdate(id, update, options); // Ensure this method is defined
    }

    async findAllPaginated(page, limit) {
        return await Customer.find()
            .skip((page - 1) * limit)
            .limit(limit);
            //Skip the first <<(page - 1) * limit>> documents and return the next <<limit>> documents
    }
}

module.exports = new CustomerRepository();
