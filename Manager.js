const Employee = require('./Employee');

class Manager extends Employee {
    constructor( ManagerName,  officeNumber) {
       const name = ManagerName;
       const office = officeNumber;
       

    super(name,office);
        this.name = name;
        
        if (office > 0) {
            this.role = "manager";
        }
        

    }
    }

const manager = new Manager(this.name , 0001);
manager.getRole();