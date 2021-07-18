const Manager = require("../Manager");

describe('Manager', ()  => {
    
    it('Should take in name, id etc and return a console log', () => {
        const obj = new Manager();
        expect(obj.getManagerName()).toEqual(`${this.name}`);


    });
});