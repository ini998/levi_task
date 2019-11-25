const { When } = require('cucumber');
const {mainPage, carsPage} = require('../../pageObjects/pages');
const {priceFilter, transmissionFilter} = require('../../pageObjects/filters');

When(/^user opens (base|cars) page$/, function(page) {
    switch(page) {
        case 'base': 
            page = mainPage;
            break;
        case 'cars': page = carsPage;
    }
    page.navigate();
    page.closeCookieMessageIfDisplayed();
})

When('I wait for {int} seconds', function(num) {
    global.browser.pause(num * 1000);
})

When('user selects something in make and model dropdowns', function(){
    this.selectedMake = mainPage.makeDropdown.selectRandomItem();
    this.selectedModel = mainPage.modelDropdown.selectRandomItem();
})

When('user clicks search button', function(){
    mainPage.clickSearchButton();
})

When('user applies price filter', function(){
    this.minPriceSelected = priceFilter.selectRandomFromDropdown(priceFilter.minPriceSelect);
    this.maxPriceSelected = priceFilter.selectRandomFromDropdown(priceFilter.maxPriceSelect);
})

When('user applies transmission filter', function(){
    transmissionFilter.automaticCheckbox.click();
})