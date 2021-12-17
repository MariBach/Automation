import mainPage from '../../pages/main.page.js';
import loginPage from '../../pages/login.page.js';
import registerPage from '../../pages/register.page.js';

describe('Registration testing', () => {
    it('Invalid email input', async () => {
        //Main Page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        await browser.pause(1000);
        //Login Page
        await loginPage.moveToRegister();
        //Registration form fill in
        await registerPage.register('test_test.com', 'test234');
        await registerPage.selectQuestion("Mother's maiden name?");
        await registerPage.inputAnswer('Name');
        await browser.pause(1000);
        await registerPage.checkUser();
    });
})





// $x('//div[@class="error"]') - error email must be unique 