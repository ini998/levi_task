class Card{
    constructor(element){
        this.webElement = element;
    }

    get brand() {return this.webElement.$('[data-e2e-id="cardCarBrand"]').getText()}
    get model() {return this.webElement.$('[data-e2e-id="cardCarModel"]').getText()}
    get price() {return this.webElement.$('[data-e2e-id="carBuyPrice"]').getText()}
}

module.exports = Card;