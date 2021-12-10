import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('Login testing', () => {
    it('Negative login testing', async () => {

        //Main page
        mainPage.open();
        mainPage.openAccountMenu();
        mainPage.navigateToLogin();
        
        //Login page
        loginPage.login('test@mail.com', 'test124');
        

        //After login page
        //await browser.pause(1000);
        await expect(loginPage.errMessage).toBeExisting(); //error message is shown in case wrong data input
        //await browser.pause(1000);
    });
});

