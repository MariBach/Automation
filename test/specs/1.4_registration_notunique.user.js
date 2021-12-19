import mainPage from '../../pages/main.page.js';
import loginPage from '../../pages/login.page.js';
import registerPage from '../../pages/register.page.js';
describe('Registration testing', () => {
    it('Warning: User is not unique', async () => {
        //Main Page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //await browser.pause(1000);
        //Login Page
        await loginPage.moveToRegister();
        //Registration form fill in
        await registerPage.register('test@test.com', 'test123');
        await registerPage.selectQuestion("Mother's maiden name?");
        await registerPage.inputAnswer('Name');        
        await registerPage.confirmRegister();
        //await browser.pause(1000);
        //await registerPage.waitForNotice();
        //await registerPage.waitForPageAvailable(registerPage.emailNotUnique);
        await registerPage.checkUserUnique();
    });
})