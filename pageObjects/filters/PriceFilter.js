class PriceFilter {
    constructor() {
        this.webElement = global.browser.$('[data-e2e-id="FilterSet_salePrice"]');
    }

    get minPriceSelect() {
        return $('#salePriceFrom [data-e2e-select-input]');
    }

    get maxPriceSelect() {
        return $('#salePriceTo [data-e2e-select-input]');
    }

    selectRandomFromDropdown(selectElement) {
        const length = selectElement.$$('option').length;
        function getRandomInt(max) {
            return Math.floor(Math.random() * max);
        }
        const indexToSelect = getRandomInt(length - 2) + 1;
        selectElement.selectByIndex(indexToSelect);
        const selectedValue = selectElement.$$('option')[indexToSelect].getText().match(/\d+/g).reduce((acc, cur) => acc.concat(cur), '');
        return selectedValue;
    }
}

module.exports = new PriceFilter();