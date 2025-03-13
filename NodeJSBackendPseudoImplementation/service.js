const CustomerRepository = require('./repository');
const CustomerDTO = require('./dto');
const {v4: uuidv4} = require('uuid') //Temporary Tokens
const NodeCache = require('node-cache');

const tokenCache = new NodeCache({ stdTTL: 1800 });
class CustomerService {
    constructor() {
        this.tokenToIdMap = new Map() // built-in JavaScript object that holds key-value pairs
        //store a mapping between temporary tokens and actual ids
    }
    async getCustomerByEmail(email) {
        const customers = await CustomerRepository.findByEmail(email);
        return CustomerDTO.toDTOs(customers);
    }

    async createCustomer(customerEntity) {
        const customer = await CustomerRepository.save(customerEntity);
        return CustomerDTO.toDTO(customer);
    }

    async getAllCustomers() {
        this.tokenToIdMap.clear()
        const customers = await CustomerRepository.findAll();
        const dto = CustomerDTO.toDTOs(customers); //convert the list of entities into DTOs
        const tokens = customers.map(customer =>{
            const token = uuidv4(); //generates a unique token
            tokenCache.set(token, customer._id); //(in-memorycache) token is set in tokenCache with the actual object's ID as its value
            
          //  console.log(`Mapping token ${token} to customer ID ${customer._id}`);
            this.tokenToIdMap.set(token, customer._id) //map temp token with the actual ID in the "tokenToIdMap" attribute
            return token; //token is returned to be collected in the "token" array
        });
       // console.log('Token to ID Map:', tokenCache.keys());
        return {dto, tokens}
    }

    async searchCustomers(searchText) {
        this.tokenToIdMap.clear()
        const customers = await CustomerRepository.findCustomerEntityBySearchText(searchText);
        const dto = CustomerDTO.toDTOs(customers);
        const tokens = customers.map(customer =>{
            const token = uuidv4();
            tokenCache.set(token, customer._id);
          //  console.log(`Mapping token ${token} to customer ID ${customer._id}`);
            this.tokenToIdMap.set(token, customer._id)
            return token;
        });
       // console.log('Token to ID Map:', tokenCache.keys());
        return {dto, tokens}
    }

    async getFilterFirstName(firstName) {
        const customers = await CustomerRepository.findByFirstName(firstName);
        return CustomerDTO.toDTOs(customers);
    }

    async getFilterLastName(lastName) {
        const customers = await CustomerRepository.findByLastName(lastName);
        return CustomerDTO.toDTOs(customers);
    }

    async getFilterBalance(balance) {
        const customers = await CustomerRepository.findByBalance(balance);
        return CustomerDTO.toDTOs(customers);
    }

    async updateCustomer(customerEntity, token) {
        try{
        const id = tokenCache.get(token);
        if(!id){
            throw new Error('Id not found')
        }
        const updatedCustomer = await CustomerRepository.findByIdAndUpdate(id, customerEntity, { new: true });
        return CustomerDTO.toDTO(updatedCustomer);
    }
    catch(e){
        console.error(e)
    }
    }

    async deleteCustomer(token) {
        const id = tokenCache.get(token);
        if(!id){
            throw new Error('Id not found')
        }
        const deletedCustomer = await CustomerRepository.deleteById(id);
        return CustomerDTO.toDTO(deletedCustomer);
    }

    async getCustomerPage(page, limit) {
        this.tokenToIdMap.clear()
        const customers = await CustomerRepository.findAllPaginated(page, limit);
        const dto = CustomerDTO.toDTOs(customers);
        const tokens = customers.map(customer =>{
            const token = uuidv4();
            tokenCache.set(token, customer._id);
          //  console.log(`Mapping token ${token} to customer ID ${customer._id}`);
            this.tokenToIdMap.set(token, customer._id)
            return token;
        });
       // console.log('Token to ID Map:', tokenCache.keys());
       return {dto, tokens}
    }

    async findCustomerEntityBySearchTextPaginated(page,limit,searchText){
        this.tokenToIdMap.clear()
        const customers = await CustomerRepository.findCustomerEntityBySearchTextPaginated(page,limit,searchText);
        const dto = CustomerDTO.toDTOs(customers);
        const tokens = customers.map(customer =>{
            const token = uuidv4();
            tokenCache.set(token, customer._id);
          //  console.log(`Mapping token ${token} to customer ID ${customer._id}`);
            this.tokenToIdMap.set(token, customer._id)
            return token;
        });
       // console.log('Token to ID Map:', tokenCache.keys());
       return {dto, tokens}

    }
}

module.exports = new CustomerService();
