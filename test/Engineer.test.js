const Engineer = require("../Engineer");

describe('Engineer', ()  => {
    
    it('Should take in name, id etc and return a console log', () => {
        const obj = new Engineer();
        expect(obj.getName()).toEqual(`${this.name}`);
        expect(obj.getGitHub()).toEqual(`${this.githubUser}`)


    });
});