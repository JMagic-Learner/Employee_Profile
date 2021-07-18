const Employee = require('./Employee');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Engineer = require('./Engineer');

class PrintEmployee extends Employee {
    constructor(name, id , email, role){
        const EmployeeName = name;
        const EmployeeID = id;
        const EmployeeEmail = email;
        const EmployeeRole = role;

    super (EmployeeName, EmployeeID, EmployeeEmail, EmployeeRole);
        this.employee = EmployeeName;
        this.employeeID = EmployeeID;
        this.employeeEmail = EmployeeEmail;
        this.employeeRole = EmployeeRole;
    }


}


const employee = new Employee('Jason', 34 , 'MaJason93@gmail.com', "Coder");
employee.getName();
employee.getID();
employee.getEmail();
employee.getRole();

const engineer = new Engineer("Viktor" , "VikHans");
engineer.getEngineerName();
engineer.getGitHub();

const intern = new Intern("John Ihbram" , "University of Texas", "Intern");
intern.getRole();
intern.getIntern();
intern.getSchool();

const manager = new Manager("Lucard" , "0001");
manager.getRole();
manager.getManagerName();
manager.getOfficeNumber();



