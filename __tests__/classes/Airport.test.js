const Airport = require("../../classes/Airport.js");
const Plane = require("../../classes/Plane.js");
const { describe, test, expect, beforeAll } = require("@jest/globals");

let airport;

describe("Airport", ()=>{
    beforeAll(()=>{
        airport = new Airport("Arrowport", "A5G45B5D6F");
    });

    test("Has name", ()=>{
        expect(airport.name).toBe("Arrowport");
    });

    test("Has airportCode", ()=>{
        expect(airport.airportCode).toBe("A5G45B5D6F");
    });

    test("getPlanes() / addPlane() works", ()=>{
        airport.addPlane(new Plane("Goober Co.", "Texas", "Miami"));
        expect(airport.getPlanes()).toEqual([new Plane("Goober Co.", "Texas", "Miami")]);
    });
});
