const Employee = require('./Employee');

class Intern extends Employee {
    constructor( name, id, email, role ,schoolName,  ){
       const Name = name;
       const Email = email;
       const Identification = id;
       const Role = role;
       const School = schoolName;
       

    super(Name, Identification, Email, Role, School);
        this.intern = Name;
        this.id = Identification;
        this.email = Email;
        this.role = Role;
        this.school = School;
      
    }

    getIntern(){
        console.log(`${this.intern}`);
        return `${this.intern}`;
    }

    getSchool(){
        console.log(`${this.school}`);
        return `${this.school}`;
    }

    }

//const intern = new Intern("John Ihbram" , "University of Texas", "Intern");
//intern.getRole();
//intern.getIntern();
//intern.getSchool();

module.exports = Intern;