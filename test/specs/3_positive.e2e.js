import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('Login testing', () => {
    it('Positive login testing', async () => {
        //Main page
        mainPage.open();
        mainPage.openAccountMenu();
        mainPage.navigateToLogin();
                
        //Login page
        // User was registered with data: testpos@test.com, password: test123
        loginPage.login('test_reg@test.com', 'test234');
        
      
        //After login page
       // await browser.pause(1000);
        await expect(mainPage.accCart).toBeExisting(); //only login users can see the shopping cart element
       // await browser.pause(1000);


        //testpos@test.com
        //test123
    });
});

