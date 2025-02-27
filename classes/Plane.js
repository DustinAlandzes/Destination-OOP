class Plane {
    #passengers;
    constructor(company, origin, destination) {
        this.company = company;
        this.origin = origin;
        this.destination = destination;
        this.#passengers = [];
    }

    getPassengers() {
        return this.#passengers
    }

    setPassengers(person) {
        this.#passengers.push(person)
    }
}


module.exports = Plane;