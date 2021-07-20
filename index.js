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
]

const InitialManager = [
    "Enter name of team manager",
    "Enter manager ID or number",
    "Enter manager email address",
    "Enter employee role",
    "Enter manager office"
    
]

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

 

async function startPrompt() {
   
    console.log("Employee Information Sequence");
    const main = await inquirer.prompt([
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

    .then((main) => {
        /*if (repetitions == 0) {
            Employee1.push("Name " + main.name)
            Employee1.push("ID # " + main.EmployeeID)
            Employee1.push("Email "+ main.EmailAddress)
            Employee1.push("Role " + main.EmployeeRole)
            repeatPrompt(response)
        } else */if (repetitions == 1 ) {
            Employee2.push("Name " + main.name)
            Employee2.push("ID # " + main.EmployeeID)
            Employee2.push("Email "+ main.EmailAddress)
            Employee2.push("Role " + main.EmployeeRole)
            
            repeatPrompt(main)
        } else if (repetitions == 2) {
            Employee3.push("Name " + main.name)
            Employee3.push("ID # " + main.EmployeeID)
            Employee3.push("Email "+ main.EmailAddress)
            Employee3.push("Role " + main.EmployeeRole)
            
            repeatPrompt(main)
        } else if (repetitions == 3) {
            Employee4.push("Name " + main.name)
            Employee4.push("ID # " + main.EmployeeID)
            Employee4.push("Email "+ main.EmailAddress)
            Employee4.push("Role " + main.EmployeeRole)
           
            repeatPrompt(main)
        } else if (repetitions == 4) {
            Employee5.push("Name " + main.name)
            Employee5.push("ID # " + main.EmployeeID)
            Employee5.push("Email "+ main.EmailAddress)
            Employee5.push("Role " + main.EmployeeRole)
            
            repeatPrompt(main)
        } else if (repetitions > 4) {
            console.log("Yall need to chill, this is just a demo application.")
            writeToFile(Employee1, Employee2, Employee3, Employee4, Employee5);
        }
        

         return
              
    });
    
    }
    
async function repeatPrompt(main) {
   
        if (main.EmployeeRole == "Manager") {
            console.log("The manager specific prompts need to initiate");
            const ManagerPrompts = await inquirer.prompt([
                {
                    type: 'input',
                    message: RoleSpecific[0],
                    name: 'rolespecific',
                }
            ])

            //if (repetitions == 0) {
    
                //Employee1.push("Office #" +  ManagerPrompts.rolespecific)
             
            //} else 
            if (repetitions == 1 ) {
                Employee2.push("Office # "+ ManagerPrompts.rolespecific)
               
            } else if (repetitions == 2) {
                Employee3.push("Office # "+ ManagerPrompts.rolespecific)
               
            } else if (repetitions == 3) {
                Employee4.push("Office # "+ ManagerPrompts.rolespecific)
               
            } else if (repetitions == 4) {
                Employee5.push("Office # "+ ManagerPrompts.rolespecific)
               
            }

        }
        else if (main.EmployeeRole == "Engineer") {
            console.log("The Engineer specific prompts need to initiate");
            const EngineerPrompts = await inquirer.prompt([
                {
                type: 'input',
                message: RoleSpecific[1],
                name: 'rolespecific',
                }
            ])
            if (repetitions == 0) {
                Employee1.push( "<a href ='https://github.com/" + `${EngineerPrompts.rolespecific}` + "'>Github User"+`${EngineerPrompts.rolespecific}`+"</a>")
             
            } else if (repetitions == 1 ) {
                Employee2.push("<a href ='https://github.com/" + `${EngineerPrompts.rolespecific}` + "'>Github User"+`${EngineerPrompts.rolespecific}`+"</a>")
               
            } else if (repetitions == 2) {
                Employee3.push("<a href ='https://github.com/" + `${EngineerPrompts.rolespecific}` + "'>Github User"+`${EngineerPrompts.rolespecific}`+"</a>")
               
            } else if (repetitions == 3) {
                Employee4.push("<a href ='https://github.com/" + `${EngineerPrompts.rolespecific}` + "'>Github User"+`${EngineerPrompts.rolespecific}`+"</a>")
               
            } else if (repetitions == 4) {
                Employee5.push("<a href ='https://github.com/" + `${EngineerPrompts.rolespecific}` + "'>Github User"+`${EngineerPrompts.rolespecific}`+"</a>")
               
            }
           
        }
        else if (main.EmployeeRole == "Intern") {
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

function or(){
    if (repetitions == 0 ){
        inquirer.prompt([
            {
                type: 'input',
                message: InitialManager[0],
                name: 'name',
            },
            {
                type: 'input',
                message: InitialManager[1],
                name: 'EmployeeID',
            },
            {
                type: 'input',
                message: InitialManager[2],
                name: 'EmailAddress',
            },
            {
                type: 'input',
                message: InitialManager[4],
                name: 'Office',
            },
            {
                type: 'list',
                message: InitialManager[3],
                name: 'EmployeeRole',
                choices: [
                    'Employee',
                    'Engineer',
                    'Manager',
                    'Intern'
                ]
            },
            {
                type: 'confirm',
                message: EntrySequence[4],
                name: 'again',
            }
        ])
        .then((response) => {
          
                Employee1.push("Name " + response.name)
                Employee1.push("ID # " + response.EmployeeID)
                Employee1.push("Email "+ response.EmailAddress)
                Employee1.push("Office" + response.Office);
                Employee1.push("Role " + response.EmployeeRole)
            
            if (response.again == false) {
                writeToFile(Employee1, Employee2, Employee3, Employee4, Employee5);
                return;
            }
            repetitions++;
            startPrompt();
            return;
        });




    }


}

or();
function writeToFile(Employee1, Employee2, Employee3, Employee4, Employee5) {
   console.log(Employee1)
   console.log(Employee2)
   console.log(Employee3)
   console.log(Employee4)
   console.log(Employee5)
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
                      <li id = "name">${Employee1[0]}</li>
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