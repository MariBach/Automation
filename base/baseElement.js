export default class BaseElement {
    constructor(wdioElement, name) {
        this.wdioElement = wdioElement;
        this.elementName = name;
    }
    async click() {
        console.log(`Click on the element "${this.elementName}"`);
        await this.wdioElement.click();
    }
    async isExisting() {
        return await this.wdioElement.isExisting();
    }
    async isDisplayed() {
        return await this.wdioElement.isDisplayed();
    }
    async waitForDisplayed() {
        return await this.wdioElement.waitForDisplayed({timeout:5000});
    }
}