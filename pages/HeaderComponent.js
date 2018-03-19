const { By } = require('selenium-webdriver');

module.exports = class HeaderComponent{

    constructor() {
        this.labelSPS = By.xpath(".//*[text()='SPS']");
      }

}