class TransmissionFilter {
    constructor() {
        this.webElement = global.browser.$('[data-e2e-id="FilterSet_transmission"]');
    }

    get automaticCheckbox() {
        return global.browser.$('//*[@data-e2e-checkbox-input][@value="automatic"]/parent::*')
    }

}

module.exports = new TransmissionFilter();