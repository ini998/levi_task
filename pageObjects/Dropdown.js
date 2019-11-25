class Dropdown {
    constructor(selector) {
        this.webElement = global.browser.$(selector);
    }

    selectRandomItem() {
        this.webElement.waitForClickable()
        this.webElement.click();
        const list = this.UL.isExisting() ? this.UL : this.OL
        list.waitForDisplayed();
        const makeDropdownItems = list.$$('[data-e2e-checkbox-label-text]');
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }

        const elemToSelect = makeDropdownItems[getRandomInt(makeDropdownItems.length-1)];
        elemToSelect.scrollIntoView();
        const text = elemToSelect.getText().split('(')[0];
        elemToSelect.click();
        return text;
    }
    get UL() {return this.webElement.$('ul');}
    get OL() {return this.webElement.$('ol');}
}

module.exports = Dropdown;