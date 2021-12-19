import feedbackPage from "../../pages/feedback.page.js";
import mainPage from "../../pages/main.page.js";
import loginPage from "../../pages/login.page.js";
import sideBar from "../../pages/sidebar.page.js";
import captcha from "../../elements/captcha.js"

describe('Feedback testing', () => {
    it('Feedback 3* testing', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login page
        // User was registered with data: 'test@test.com', 'test123'
        await loginPage.login('test@test.com', 'test123');
        await sideBar.clickSideBar();
        await sideBar.waitForScreenAvailable(sideBar.sideBarScroll);
        await sideBar.openFeedbackPage();
        await browser.pause(1000);
        await feedbackPage.writeFeedback("Great!");
        await feedbackPage.setRating();
        //let captcha = getCaptcha(feedbackPage.captchaQuestion);
        await feedbackPage.inputCaptcha();        
        //await browser.pause(2000);
        await feedbackPage.submitFeedback();
        //await browser.pause(2000);
        await feedbackPage.checkFeedbackAccepted();

    })
})

//$x('(//div[@class="mat-list-item-content"])[5]') - click to open review
//$x('//span[contains(text(), "Feedback")]')
//$$('#comment') - comment field
//$$('#captchaControl') - input captcha field
//$$('#submitButton') - submit feedback publishing
//$$('#rating[aria-valuenow="3"]') - slider