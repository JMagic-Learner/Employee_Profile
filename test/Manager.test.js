const Manager = require("../Manager");

describe('Manager', ()  => {
    
    it('Should take in name, id etc and return a console log', () => {
        const obj = new Manager();
        expect(obj.getName()).toEqual(`${this.name}`);
        expect(obj.getID()).toEqual(`${this.id}`);


    });
});