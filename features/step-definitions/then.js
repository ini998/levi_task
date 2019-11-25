const { Then } = require('cucumber');
const {carsPage, mainPage} = require('../../pageObjects/pages');
const assert = require('assert');

Then('only cars with selected make and model are displayed', function(){
    carsPage.CardsList.forEach(card => {
        assert.strictEqual(card.brand, this.selectedMake);
        assert.strictEqual(card.model, this.selectedModel);
    })
})

Then('correct filters are applied', function() {
    carsPage.CardsList.forEach(card => {
        if(card.price !== 'Sold') {
            console.log("\n\n\n",this.selectedValues);
            
            assert.strictEqual(card.price.match(/\d+/g).reduce((acc, cur) => acc.concat(cur), '') > this.minPriceSelected, true);
            assert.strictEqual(card.price.match(/\d+/g).reduce((acc, cur) => acc.concat(cur), '') < this.maxPriceSelected, true);
        }
        assert.strictEqual(card.webElement.getText().includes('Automatic'), true);
    })
})