class Customer {
    constructor(data){
        this.CustomerID = data.CustomerID;
        this.Name = data.Name;
        this.Phone = data.Phone;
        this.Email = data.Email;
        this.BirthYear = data.BirthYear;
        this.CreatedDate = data.CreatedDate;
        this.SpinNumber = data.SpinNumber;
        this.MembershipID = data.MembershipID;
        this.PasswordHash = data.PasswordHash;
    }
}

module.exports = Customer;