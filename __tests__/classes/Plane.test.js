const Plane = require("../../classes/Plane");
const Person = require("../../classes/Person");

describe("Plane", () => {
    it("Creates new Plane", () => {
        const plane = new Plane();
        expect(plane).toBeInstanceOf(Plane);
    })

    it("has company, origin and destination", () => {
        const plane = new Plane("company", "origin", "destination");
        expect(plane.company).toEqual("company");
        expect(plane.origin).toEqual("origin");
        expect(plane.destination).toEqual("destination");
    })

    it("passengers starts as an empty array", () => {
        const plane = new Plane("company", "origin", "destination");
        expect(plane.getPassengers()).toEqual([]);
    })

    it("getPassengers()", () => {
        const plane = new Plane("company", "origin", "destination");
        expect(plane.getPassengers()).toEqual([]);
    })

    it("setPassengers()", () => {
        const plane = new Plane("company", "origin", "destination");
        const person = new Person("name", "destination")
        plane.setPassengers(person)
        expect(plane.getPassengers()).toEqual([person]);
    })
})