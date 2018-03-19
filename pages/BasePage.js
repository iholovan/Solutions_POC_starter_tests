module.exports = class BasePage {

    constructor() {
    }

    async WaitForPageToLoad() {

        try {
            driver.wait(() => {
                return driver.executeScript('return document.readyState').then((readyState) => {
                    return readyState === 'complete';
                });
            });
        }
        catch (error) {
            throw(`Failed on waiting for ${this.constructor.name} page to load! \n ${error}`);
        }
    }

}