const Employee = require('./Employee');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Engineer = require('./Engineer');
const fs = require("fs");
const inquirer = require("inquirer");

const EntrySequence = [
    "Enter name of employee",
    "Enter employee ID or number",
    "Enter employee email address",
    "Enter employee role",
    "Do you have more employees"
];

const RoleSpecific = [
    "What is the manager's office number",
    "What is the engineer's github username",
    "What is the intern's school"
]

const managerOffice = [];
const engineerUsername = [];
const internSchool = [];

let repetitions = 0;
const Employee1 =[];
const Employee2 =[];
const Employee3 =[];
const Employee4 =[];
const Employee5 =[];

function startPrompt() {
    console.log("Employee Information Sequence");
    inquirer
    
    
        .prompt([
            {
                type: 'input',
                message: EntrySequence[0],
                name: 'name',
            },
            {
                type: 'input',
                message: EntrySequence[1],
                name: 'EmployeeID',
            },
            {
                type: 'input',
                message: EntrySequence[2],
                name: 'EmailAddress',
            },
            {
                type: 'list',
                message: EntrySequence[3],
                name: 'EmployeeRole',
                choices: [
                    'Employee',
                    'Engineer',
                    'Manager',
                    'Intern'
                ]
            }
        ])
    
    
    .then((response) => {
        if (repetitions == 0) {
            Employee1.push("Name " + response.name)
            Employee1.push("ID # " + response.EmployeeID)
            Employee1.push("Email "+ response.EmailAddress)
            Employee1.push("Role " + response.EmployeeRole)
            repeatPrompt(response)
        } else if (repetitions == 1 ) {
            Employee2.push("Name " + response.name)
            Employee2.push("ID # " + response.EmployeeID)
            Employee2.push("Email "+ response.EmailAddress)
            Employee2.push("Role " + response.EmployeeRole)
            repeatPrompt(response)
        } else if (repetitions == 2) {
            Employee3.push("Name " + response.name)
            Employee3.push("ID # " + response.EmployeeID)
            Employee3.push("Email "+ response.EmailAddress)
            Employee3.push("Role " + response.EmployeeRole)
            repeatPrompt(response)
        } else if (repetitions == 3) {
            Employee4.push("Name " + response.name)
            Employee4.push("ID # " + response.EmployeeID)
            Employee4.push("Email "+ response.EmailAddress)
            Employee4.push("Role " + response.EmployeeRole)
            repeatPrompt(response)
        } else if (repetitions == 4) {
            Employee5.push("Name " + response.name)
            Employee5.push("ID # " + response.EmployeeID)
            Employee5.push("Email "+ response.EmailAddress)
            Employee5.push("Role " + response.EmployeeRole)
            repeatPrompt(response)
        } else if (repetitions > 4) {
            console.log("Yall need to chill, this is just a demo application.")
            writeToFile(Employee1, Employee2, Employee3, Employee4, Employee5);
        }
        

         return
              
    });
    
    }
    
async function repeatPrompt(response) {
   
        if (response.EmployeeRole == "Manager") {
            console.log("The manager specific prompts need to initiate");
            const ManagerPrompts = await inquirer.prompt([
                {
                    type: 'input',
                    message: RoleSpecific[0],
                    name: 'rolespecific',
                }
            ])

            if (repetitions == 0) {
                Employee1.push("Office # "+ ManagerPrompts.rolespecific)
             
            } else if (repetitions == 1 ) {
                Employee2.push("Office # "+ ManagerPrompts.rolespecific)
               
            } else if (repetitions == 2) {
                Employee3.push("Office # "+ ManagerPrompts.rolespecific)
               
            } else if (repetitions == 3) {
                Employee4.push("Office # "+ ManagerPrompts.rolespecific)
               
            } else if (repetitions == 4) {
                Employee5.push("Office # "+ ManagerPrompts.rolespecific)
               
            }

        }
        else if (response.EmployeeRole == "Engineer") {
            console.log("The Engineer specific prompts need to initiate");
            const EngineerPrompts = await inquirer.prompt([
                {
                type: 'input',
                message: RoleSpecific[1],
                name: 'rolespecific',
                }
            ])
            if (repetitions == 0) {
                Employee1.push("Github User" + EngineerPrompts.rolespecific)
             
            } else if (repetitions == 1 ) {
                Employee2.push("Github User" + EngineerPrompts.rolespecific)
               
            } else if (repetitions == 2) {
                Employee3.push("Github User" + EngineerPrompts.rolespecific)
               
            } else if (repetitions == 3) {
                Employee4.push("Github User" + EngineerPrompts.rolespecific)
               
            } else if (repetitions == 4) {
                Employee5.push("Github User" + EngineerPrompts.rolespecific)
               
            }
           
        }
        else if (response.EmployeeRole == "Intern") {
            console.log("The Intern specific prompts need to initiate");
            const InternPrompts = await inquirer.prompt([
                {
                type: 'input',
                message: RoleSpecific[2],
                name: 'rolespecific',
                }
            ])
            if (repetitions == 0) {
                Employee1.push("School " + InternPrompts.rolespecific)
             
            } else if (repetitions == 1 ) {
                Employee2.push("School " + InternPrompts.rolespecific)
               
            } else if (repetitions == 2) {
                Employee3.push("School " + InternPrompts.rolespecific)
               
            } else if (repetitions == 3) {
                Employee4.push("School " + InternPrompts.rolespecific)
               
            } else if (repetitions == 4) {
                Employee5.push("School " + InternPrompts.rolespecific)
               
            }

            //internSchool.push(InternPrompts.rolespecific);
        }
        const answer = await inquirer.prompt([
            
            {
                type: 'confirm',
                message: EntrySequence[4],
                name: 'again',
            }
        ])

        
               
        
        
        if (answer.again == false) {
 
     
        writeToFile(Employee1, Employee2, Employee3, Employee4, Employee5);
        return;
        } 

        



        repetitions++;
        console.log("Another sequence has started")
        startPrompt();
        
        return;
    }

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

startPrompt();


function writeToFile(Employee1, Employee2, Employee3, Employee4, Employee5) {
   
    fs.writeFile('./dist/index.html', 
      
          `
          <!DOCTYPE html>
          <html lang="en">
          <head>
              <meta charset="UTF-8">
              <meta http-equiv="X-UA-Compatible" content="IE=edge">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <title>Employee Directory</title>
              <link href="./style.css" type="text/css" rel = "stylesheet"/>
          </head>
          
          
          <body>
              <h1 class = "page-title"> EMPLOYEE DIRECTORY </h1>  
              <div class = "container">
              <div class = "employee-box">
                  <ul>
                      <li id = "name"> ${Employee1[0]}</li>
                      <li id = "id"> ${Employee1[1]}</li>
                      <li id = "email">${Employee1[2]}</li>
                      <li id = "role">${Employee1[3]}</li>
                      <li id = "rolespecific">${Employee1[4]}</li>
                  </ul>
              </div>
          
              <div class = "employee-box">
              <ul>
              <li id = "name"> ${Employee2[0]}</li>
              <li id = "id"> ${Employee2[1]}</li>
              <li id = "email">${Employee2[2]}</li>
              <li id = "role">${Employee2[3]}</li>
              <li id = "rolespecific">${Employee2[4]}</li>
          </ul>
              </div>
          
              <div class = "employee-box">
              <ul>
              <li id = "name"> ${Employee3[0]}</li>
              <li id = "id"> ${Employee3[1]}</li>
              <li id = "email">${Employee3[2]}</li>
              <li id = "role">${Employee3[3]}</li>
              <li id = "rolespecific">${Employee3[4]}</li>
          </ul>
              </div>
          
              <div class = "employee-box">
              <ul>
              <li id = "name"> ${Employee4[0]}</li>
              <li id = "id"> ${Employee4[1]}</li>
              <li id = "email">${Employee4[2]}</li>
              <li id = "role">${Employee4[3]}</li>
              <li id = "rolespecific">${Employee4[4]}</li>
          </ul>
              </div>
          
              <div class = "employee-box">
              <ul>
              <li id = "name"> ${Employee5[0]}</li>
              <li id = "id"> ${Employee5[1]}</li>
              <li id = "email">${Employee5[2]}</li>
              <li id = "role">${Employee5[3]}</li>
              <li id = "rolespecific">${Employee5[4]}</li>
          </ul>
              </div>
          
              <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
              <script src="https://requirejs.org/docs/release/2.3.5/minified/require.js"></script>
              <script src = "../index.js"></script>
              </div>
              
          </body>
          
          </html>
`
               
            
      
          , (err) =>
              err ? console.error(err) : console.log('Success!'))  
            
            
}