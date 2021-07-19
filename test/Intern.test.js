const Intern = require("../Intern");

describe('Intern', ()  => {
    
    it('Should take in name, id etc and return a console log', () => {
        const obj = new Intern();
        expect(obj.getIntern()).toEqual(`${this.name}`);
        expect(obj.getSchool()).toEqual(`${this.school}`);


    });
});