import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('Login testing', () => {
    it('Positive login testing', async () => {
        //Main page
        mainPage.open();
        mainPage.openAccountMenu();
        mainPage.navigateToLogin();
                
        //Login page
        loginPage.login('testpos@test.com', 'test123');
      
        //After login page
        await browser.pause(1000);
        await expect($('button[aria-label="Show the shopping cart"]')).toBeExisting();


        //testpos@mail.com
        //test123
    });
});

