const Person = require("../../classes/Person.js");
const Bag = require("../../classes/Bag.js");
const { describe, test, expect, beforeAll } = require("@jest/globals");

let person;

describe("Person", ()=>{
    beforeAll(()=>{
       person = new Person("Damien", "Miami"); 
    });

    test("Has a name", ()=>{
        expect(person.name).toBe("Damien");
    });

    test("Has a destination", ()=>{
        expect(person.destination).toBe("Miami");
    });

    test("addBag() / getBags() works", ()=>{
        person.addBag(new Bag(10, 1));
        expect(person.getBags()).toEqual([new Bag(10, 1)]);
    });
});
