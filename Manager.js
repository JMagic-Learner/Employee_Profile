const Employee = require('./Employee');

class Manager extends Employee {
    constructor( ManagerName,  officeNumber) {
       const manager = ManagerName;
       const office = officeNumber;
       

    super(manager,office);
        this.manager = manager;
        this.office = office;
        
        if (office > 0) {
            this.role = "manager";
            console.log (office);
        }
        
        

    }

    getOfficeNumber(){
         console.log(`${this.office}`);
        return this.office;
    }

    getManagerName(){
        console.log(`${this.manager}`);
        return `${this.manager}`;
    }

    }

const manager = new Manager("Lucard" , "0001");
manager.getRole();
manager.getManagerName();
manager.getOfficeNumber();

module.exports = Manager;