const Employee = require('./Employee');

class Engineer extends Employee {
    constructor( EngineerName,  github) {
       const Engineer = EngineerName;
       const githubUser = github;
    
        super(Engineer, githubUser);
            this.Engineer =Engineer;
            this.githubUser = githubUser;
        
      //  if (office > 0) {
     //       this.role = "manager";
     //       console.log (office);
        }
        
        

    


    getGitHub(){
        console.log(this.githubUser);
        return `${this.githubUser}`;
    }

    getEngineerName(){
        console.log(`${this.Engineer}`);
        return `${this.Engineer}`;
    }

    }

//Initial testing for to see if the value Viktor, is passed through to Engineer.test.js
//const engineer = new Engineer("Viktor" , "VikHans");
//engineer.getEngineerName();
//engineer.getGitHub();

module.exports = Engineer;