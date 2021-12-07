import BaseElement from '../base/baseElement.js';
import Button from './button.js';

export default class Dropdown extends BaseElement{
    constructor(wdioElement, name) {
        super (wdioElement, name)
    }
    async open() {
        await this.wdioElement.click();
    }

    async select(option) {
        await this.open();        
        //$x(`//*[@class="mat-option-text"][contains(text(), "Mother's maiden name?")]`)
        await new Button($(`//*[@class="mat-option-text"][contains(text(), "${option}")]`), `Question "${option}"`).click();

    } 
}