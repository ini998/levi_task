const {config} = require ("./wdio.conf");

config.baseUrl = 'https://www.carnext.com/en-be/';
config.specs = ['./features/carnext-search.feature'];
config.capabilities = [{
    maxInstances: 1,
    browserName: "chrome"
}]

config.before = () => {
    global.browser.maximizeWindow();
}
exports.config = config;
