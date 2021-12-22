import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import profilePage from "../../pages/profile.page.js"
import inputData from '../../pages/inputs.js'

describe('User profile testing', () => {
    it('update users info', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login page
        // User was registered with data: 'test@test.com', 'test123'
        await loginPage.login(inputData.validMail, inputData.validPswd);
        await mainPage.openAccountMenu();
        await mainPage.openUserProfile();
        await profilePage.setUserName(inputData.userName);
        await profilePage.uploadPhoto();
        await browser.saveScreenshot('./allure-results/screenshot.png')
        await profilePage.confirmChanges();
    })
})   