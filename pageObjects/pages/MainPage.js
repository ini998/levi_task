const Dropdown = require('../Dropdown');
const Page = require('./Page');

class MainPage extends Page {
    get makeDropdown() {
        const makeDropdownSelector = '[data-e2e-id="brandDropdown"]';
        return new Dropdown(makeDropdownSelector);
    }
    get modelDropdown() {
        const modelDropdownSelector = '[data-e2e-id="modelDropdown"]';
        return new Dropdown(modelDropdownSelector);
    }
    clickSearchButton() {
        const searchButtonSelector = '[data-e2e-id="searchButton"]'
        global.browser.$(searchButtonSelector).waitForClickable()
        global.browser.$(searchButtonSelector).click();
    }
}

module.exports = new MainPage('');