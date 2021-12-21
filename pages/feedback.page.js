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
        await allure.addStep(`Set a rating`);
        await this.ratingSlider.select();
    }
    async writeFeedback(text) {
        await allure.addStep(`Write a feedback`);
        await this.feedbackText.setValue(text);
    }

    async inputCaptcha() {  
        await allure.addStep(`Input Captcha`);
        let value = await this.captchaQuestion.getCaptcha();
        await this.captchaControl.setValue(value);
    }
    async submitFeedback() {
        await allure.addStep(`Submit a feedback`);
        await this.submitButton.click();
    }
    async checkFeedbackAccepted() {
        await expect(this.thankMsg).toBeExisting();
    }
}
export default new FeedbackPage();

// input=eval(captcha.innerText) - input for captcha field