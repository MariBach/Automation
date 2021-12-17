import BaseElement from "../base/baseElement.js"

export default class Captcha extends BaseElement {
    constructor(wdioElement, name) {
        super(wdioElement, name)
    }
    async getCaptcha() {
        let captcha = await this.wdioElement.getText();
        let input = await eval(captcha);
        return input;
    }
}
