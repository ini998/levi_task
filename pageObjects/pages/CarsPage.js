const Page = require("./Page");
const Card = require("../Card");
class Cars extends Page {
    get CardsList() {
        const list = global.browser.$$('[data-e2e-id="searchResultsCar"]');
        const arr = list.map(card => new Card(card));
        return arr;
    }
}

module.exports = new Cars('cars');