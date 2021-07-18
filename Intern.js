const Employee = require('./Employee');

class Intern extends Employee {
    constructor( InternName, schoolName, role ){
       const intern = InternName;
       const school = schoolName;
       const roleIntern = role;
       

    super(intern, school, roleIntern);
        this.intern = InternName;
        this.school = school;
        this.role = roleIntern;
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

const intern = new Intern("John Ihbram" , "University of Texas", "Intern");
intern.getRole();
intern.getIntern();
intern.getSchool();

module.exports = Intern;