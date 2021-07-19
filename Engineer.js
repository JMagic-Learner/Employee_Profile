const Employee = require('./Employee');

class Engineer extends Employee {
    constructor( EngineerName, id, email, role , github) {
       const Engineer = EngineerName;
       const identification = id;
       const Email = email;
       const githubUser = github;
       const Role = role;
    
        super(Engineer, identification, Email, Role, githubUser);
            this.Engineer =Engineer;
            this.id = identification;
            this.githubUser = githubUser;
            this.email = Email;
            this.role = Role;

        
      //  if (office > 0) {
     //       this.role = "manager";
     //       console.log (office);
        }
        
        

    


    getGitHub(){
        console.log(this.githubUser);
        return `${this.githubUser}`;
    }


    }

//Initial testing for to see if the value Viktor, is passed through to Engineer.test.js
//const engineer = new Engineer("Viktor" , "VikHans");
//engineer.getEngineerName();
//engineer.getGitHub();

module.exports = Engineer;