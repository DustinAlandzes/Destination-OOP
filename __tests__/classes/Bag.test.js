const Bag = require("../../classes/Bag");
const Person = require("../../classes/Person");

describe("Bag", () => {
    it("Creates instance", () => {
        const bag = new Bag();
        expect(bag).toBeInstanceOf(Bag);
    })

    it("Should assign weight and id", () => {
        const bag = new Bag(100, 1);
        expect(bag.weight).toBe(100);
        expect(bag.id).toBe(1);
    })

    it("getOwner method", () => {
        const bag = new Bag(100, 1);
        expect(bag.getOwner()).toBe(null)
    })

    it("setOwner method", () => {
        const bag = new Bag(100, 1);
        const person = new Person("name", "destination");
        bag.setOwner(person)
        expect(bag.getOwner()).toStrictEqual(person);
    })
})