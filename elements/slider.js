import BaseElement from "../base/baseElement.js";

export default class Slider extends BaseElement{
    constructor(wdioElement, name) {
        super (wdioElement, name)
    }
    async select() {
        //await new BaseElement($(`#rating[aria-valuenow="${rating}"]`)).click();
        await new BaseElement($(`#rating`)).click();
    }
}
