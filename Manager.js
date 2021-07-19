const Employee = require('./Employee');

class Manager extends Employee {
    constructor( name, id, email, role,  officeNumber) {
       const Name = name;
       const Identification = id;
       const Email = email;
       const Role = role;
       const office = officeNumber;
       

    super(Name,Identification,Email,Role,office);
        this.name = Name;
        this.id = Identification;
        this.email = Email;
        this.role = Role;
        this.office = office;
    }

    getOfficeNumber(){
        console.log(`${this.office}`);
        return this.office;
    }

    }

//const manager = new Manager("Lucard" , "0001");
//manager.getOfficeNumber();

module.exports = Manager;