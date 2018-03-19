const { Builder } = require('selenium-webdriver');

module.exports = class WebDriverManager {

    constructor() {
        this.driver = new Builder()
            .forBrowser('chrome')
            .build();
        this.driver.manage().window().maximize();
    }
}