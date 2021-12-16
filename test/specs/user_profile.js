import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import profilePage from "../../pages/profile.page.js"



describe('User profile testing', () => {
    it('update users info', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login page
        // User was registered with data: 'test@test.com', 'test123'
        await loginPage.login('test@test.com', 'test123');
        await mainPage.openAccountMenu();
        await mainPage.openUserProfile();
        let user = "Mari";
        await profilePage.setUserName(user);
        await profilePage.uploadPhoto();
        await browser.saveScreenshot('./allure-results/screenshot.png')
        
        //await profilePage.confirmChanges();
    })
})   