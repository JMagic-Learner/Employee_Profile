const Employee = require('./Employee');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Engineer = require('./Engineer');


/*class PrintEmployee extends Employee {
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
*/

const employee = new Employee('Jason', 347 , 'MaJason93@gmail.com', "Coder");
employee.getName();
employee.getID();
employee.getEmail();
employee.getRole();

const engineer = new Engineer("Viktor", 033 , "Vichans@gmail.com", "Engineer" , "VikHans");
engineer.getName();
engineer.getID();
engineer.getEmail();
engineer.getRole();
engineer.getGitHub();

const intern = new Intern("John Ihbram", 566, "Ihbram041@outlook.com", "Intern",  "University of Texas");
intern.getName();
intern.getID();
intern.getEmail();
intern.getRole();
intern.getSchool();

const manager = new Manager("Lucia Vandermuellen", 002, "LVanders@gmail.com", "Manager",  "0A23");
manager.getName();
manager.getID();
manager.getEmail();
manager.getRole();
manager.getOfficeNumber();


module.exports = Manager;
module.exports = Intern;
module.exports = Engineer;
module.exports = Employee;
