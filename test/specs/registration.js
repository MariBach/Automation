import mainPage from '../../pages/main.page.js';
import loginPage from '../../pages/login.page.js';
import registerPage from '../../pages/register.page.js';

describe('Registration testing', () => {
    it('User registration', async () => {
        //Main Page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        await browser.pause(1000);

        //Login Page
        await loginPage.moveToRegister();

        //Registration form fill in
        await registerPage.register('test_reg@test.com', 'test234');
        await registerPage.selectQuestion("Mother's maiden name?");
        await registerPage.inputAnswer('Apalko');
        await browser.pause(1000);
        await registerPage.confirmRegister();
    });
})