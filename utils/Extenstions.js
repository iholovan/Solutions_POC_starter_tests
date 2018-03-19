const { WebElement, By, until } = require('selenium-webdriver');
var webDriver = require("./WebDriverManager");

var timeout = 20000;

module.exports = Object.assign(By.prototype, {

    async Element() {

        try {
            await this.WaitForElementLocated();
            return await driver.findElement(this);
        }
        catch (error) {
            throw(`Failed to find an element!`, `"By: " ${this}`, `Error: ${error}`);
        }
    },

    async Elements() {

        try {
            await this.WaitForElementLocated();
            return await driver.findElements(this);
        }
        catch (error) {
            throw(`Failed to find an element!`, `"By: " ${this}`, `Error: ${error}`);
        }
    },

    async Fill(value) {

        try {
            const element = await this.WaitForElementLocated();
            await element.clear();
            await driver.sleep(1000);
            await element.sendKeys(value);
        }

        catch (error) {
            throw(`Failed to fill '${value}' value within an element! ${error}`);
        }
    },


    async Click() {

        try {
            const element = await this.WaitForElementLocated();
            await element.click();
        }

        catch (error) {
            throw(`Failed to click an element! ${error}`);
        }
    },

    async GetText() {

        try {
            const element = await this.WaitForElementLocated();
            await element.getText();
        }

        catch (error) {
            throw(`Failed to get text from the element! ${error}`);
        }
    },

    async WaitForElementLocated() {

        try {
            return await driver.wait(until.elementLocated(this, timeout)); // TODO: export timeout to config
        }

        catch (error) {
            throw(`Element is not located! ${error}`);
        }
    },

    async WaitForElementIsVisible() {

        try {
            return await driver.wait(until.elementIsVisible(this, timeout)); // TODO: export timeout to config
        }

        catch (error) {
            throw(`Element is not visible! ${error}`);
        }
    },

    async WaitForElementIsSelected() {

        try {
            return await driver.wait(until.elementIsSelected(this, timeout)); // TODO: export timeout to config
        }

        catch (error) {
            throw(`Element is not located! ${error}`);
        }
    }

});