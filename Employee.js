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
        console.log(`${this.role}`);
        return  `${this.role}`;
    }

}

const employee = new Employee('Jason', 34 , 'MaJason93@gmail.com', "Coder");
employee.getName();
employee.getID();
employee.getEmail();
employee.getRole();

module.exports = Employee;