
const Employee = require("../Employee");

describe('Employee', ()  => {
    
    it('Should take in name, id etc and return a console log', () => {
        const obj = new Employee();
        expect(obj.getName()).toEqual(`${this.name}`);
        expect(obj.getID()).toEqual(`${this.id}`);

    });
});
