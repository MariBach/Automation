import BasePage from "../base/basePage.js";
import Slider from "../elements/slider.js";
import Input from "../elements/input.js";
import BaseElement from "../base/baseElement.js";
import Button from "../elements/button.js"
import Captcha from "../elements/captcha.js";

class FeedbackPage extends BasePage{
    
    get ratingSlider() {
        return new Slider($('#rating'));
    }
    get feedbackText() {
        return new Input($('#comment'));
    }
    get captchaControl(){
        return new Input($('#captchaControl'));
    }
    get captchaQuestion() {
        return new Captcha($('#captcha'));
    }
    //get captcha() {
     //   return nw Captcha.getCaptcha(this.captchaQuestion);
    
    get submitButton() {
        return new Button($('#submitButton'));
    }
    get thankMsg() {
        return new BaseElement($('simple-snack-bar'));
    }
    async setRating() {
        await this.ratingSlider.select();
    }
    async writeFeedback(text) {
        await this.feedbackText.setValue(text);
    }

    async inputCaptcha() {      
        let value = await this.captchaQuestion.getCaptcha();
        await this.captchaControl.setValue(value);
    }
    async submitFeedback() {
        await this.submitButton.click();
    }
    async checkFeedbackAccepted() {
        await expect(this.thankMsg).toBeExisting();
    }
}
export default new FeedbackPage();

// input=eval(captcha.innerText) - input for captcha field