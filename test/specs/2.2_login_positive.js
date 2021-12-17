import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('Login testing', () => {
    it('Positive login testing', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
                
        //Login page
        // User was registered with data: 'test@test.com', 'test123'
        await loginPage.login('test@test.com', 'test123');
        await browser.pause(5000);      
        //After login page
       // await browser.pause(1000);
        await expect(mainPage.accCart).toBeExisting(); //only login users can see the shopping cart element

    });
});

