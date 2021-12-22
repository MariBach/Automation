import feedbackPage from "../../pages/feedback.page.js";
import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";
import sideBar from "../../pages/sidebar.page.js";
import captcha from "../../elements/captcha.js"
import inputData from '../../pages/inputs.js'

describe('Feedback testing', () => {
    it('Feedback 3* testing', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login page
        await loginPage.login(inputData.validMail, inputData.validPswd);
        await sideBar.clickSideBar();
        await sideBar.waitForScreenAvailable(sideBar.sideBarScroll);
        await sideBar.openFeedbackPage();
        await feedbackPage.writeFeedback(inputData.feedback);
        //await feedbackPage.writeFeedback("Great!");
        await feedbackPage.setRating();
        await feedbackPage.inputCaptcha();        
        await feedbackPage.submitFeedback();
        await feedbackPage.checkFeedbackAccepted();

    })
})

//$x('(//div[@class="mat-list-item-content"])[5]') - click to open review
//$x('//span[contains(text(), "Feedback")]')
//$$('#comment') - comment field
//$$('#captchaControl') - input captcha field
//$$('#submitButton') - submit feedback publishing
//$$('#rating[aria-valuenow="3"]') - slider