import { Utils } from '../app/Utils'


describe('Utils test suite', ()=>{

    test('sum numbers', ()=> {
        const result = Utils.sum(2, 3);
        expect(result).toBe(5);
    })

    test('First test', ()=> {
        const result = Utils.toUpperCase('abc');
        expect(result).toBe('ABC');
        
    })
});