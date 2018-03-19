const { By } = require('selenium-webdriver');
const BasePage = require('./BasePage');
const HeaderComponent = require('./HeaderComponent');

module.exports = class TokenPage extends BasePage {

    constructor() {
        super();
     //   this.TokenType = new HeaderComponent().labelSPS;
        this.TokenType = By.xpath("//div[contains(@id, 'undefined-Tokentype')]");
        this.BurnableMenuItem = By.xpath("//span[@role='menuitem']//div[text()='Burnable']");
        this.MintableMenuItem = By.xpath("//span[@role='menuitem']//div[text()='Mintable']");
        this.AddTokenIcon = By.css(".material-icons");
        this.NameField = By.css("input[name='name']");
        this.SymbolField = By.name("symbol");
        this.DecimalsField = By.name("decimals");
        this.TotalSupplyField = By.name("totalSupply");
        this.СreateButton = By.xpath("//span[contains(text(),'Create')]");
        this.BurnableTokenRow = By
            .xpath(".//span[text()='Burnable tokens']/../..//table//tr[.//td[contains(text(), 'TokenName')] and .//td[contains(text(), 'TokenSymbol')]]");
    }

}