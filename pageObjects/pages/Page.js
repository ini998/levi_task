class Page{
    constructor(url){
        this.url = url;
    }

    navigate() {
        global.browser.url(this.url);
    }
    
    closeCookieMessageIfDisplayed(){
        const button = global.browser.$('[aria-label="Accept Cookies"]');
        const isDisplayed = button.isDisplayed();
        if(isDisplayed) {
            button.waitForClickable()
            button.click();
            button.waitForDisplayed(undefined, true) // wait until element disappears with default timeout
        }
    }
}

module.exports = Page;