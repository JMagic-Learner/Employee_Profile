class Employee {
    constructor(name, id , email, role){
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    

    getName(){
        console.log(`${this.name}`);
        return `${this.name}`;
    }

    getID(){
        console.log(`${this.id}`);
        return `${this.id}`;
    }

    getEmail(){
        console.log(`${this.email}`);
        return `${this.email}`;
    }

    getRole(){
        if (this.role == "Manager") {
            console.log( `${this.role}`);
            return  `${this.role}`;
        }
        console.log(`${this.role}`);
        return  `${this.role}`;
    }

}

//Initial testing for to see if the values for Employee, is passed through to Employee.test.js
//const employee = new Employee();
//employee.getName();
//employee.getID();
//employee.getEmail();
//employee.getRole();

module.exports = Employee;