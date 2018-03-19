var expect = require("chai").expect;
var tools = require("../lib/tools");
const { By, until, Key } = require('selenium-webdriver');
var path = "http://localhost:3006/";
var TokensPage = require('../pages/TokensPage');
const WebDriverManager = require('../utils/WebDriverManager');
const extenstions = require('../utils/Extenstions');

// ps aux | grep testrpc
// kill -9 pid

/* testrpc --account="0xc93edaa3e0d359419fd296fd4a32b3f778e6609f5831d092c6b076ad0ad719c1, 99999999999999999999999999999999"
--account="0x4dfe7801f2438cbd513a16f537117f78a8d204c8ef82be7cb9adc300f20bafb8, 99999999999999999999999999999999"
--account="0xd94ec309efbef592983d568014d24657edef9face4697e671814babcbf84de3c, 99999999999999999999999999999999" -l 999999999 */

describe("Tokens", async function() {

    this.timeout(15000);

    beforeEach(async () => {
        global.driver = new WebDriverManager().driver;
        driver.get(path);
    });

    afterEach(function () {
       driver.quit();
    });

    it("Create New Token", async () => {

        const token = {
            name: "TokenName",
            symbol: "TokenSymbol",
            decimal: 4,
            totalSupply: 10
        } // TODO: move test data to JSON file

        const page = new TokensPage();
        await page.AddTokenIcon.Click();
        await page.TokenType.Click();
        await page.BurnableMenuItem.Click();
        await page.WaitForPageToLoad();
        driver.sleep(1000);
        await page.NameField.Fill(token.name);
        driver.sleep(1000);
        await page.SymbolField.Fill(token.symbol);
        await page.DecimalsField.Fill(token.decimal);
        await page.TotalSupplyField.Fill(token.totalSupply);
        await page.СreateButton.Click();
        const tokenRow = await page.BurnableTokenRow.Element();
        var text = await tokenRow.getText();
        console.log("Token Data!!! ", text);

        expect(text).to.equal("TokenSymbol TokenName 10");

   });
});