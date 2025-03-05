class CustomerDTO {
    constructor(firstName, lastName, email, balance) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.balance = balance;
    }

    static toDTO(customer) {
        return new CustomerDTO(
            customer.firstName, 
            customer.lastName, 
            customer.email, 
            customer.balance);
    }

    static toDTOs(customers) {
        return customers.map(customer => CustomerDTO.toDTO(customer));
    }
}

module.exports = CustomerDTO;
