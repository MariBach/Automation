import mainPage from '../../pages/main.page.js';
import loginPage from '../../pages/login.page.js';
import registerPage from '../../pages/register.page.js';

describe('Registration testing', () => {
    it('User input not valid email', async () => {
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
        await registerPage.inputAnswer('Apalko');
        await browser.pause(1000);
        await registerPage.checkUser();
    });
})

describe('Registration testing', () => {
    it('Warning: User is not unique', async () => {
        //Main Page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        await browser.pause(1000);

        //Login Page
        await loginPage.moveToRegister();

        //Registration form fill in
        await registerPage.register('tes@test.com', 'test234');
        await registerPage.selectQuestion("Mother's maiden name?");
        await registerPage.inputAnswer('Apalko');
        
        await registerPage.confirmRegister();
        await browser.pause(1000);
        //await registerPage.waitForNotice();
        //await registerPage.waitForPageAvailable(registerPage.emailNotUnique);
        await registerPage.checkUserUnique();
    });
})

describe('Registration testing', () => {
    it('Password meets length requirement', async () => {
        //Main Page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        await browser.pause(1000);

        //Login Page
        await loginPage.moveToRegister();

        //Registration form fill in
        await registerPage.register('test@test.com', 'test');
        //await registerPage.selectQuestion("Mother's maiden name?");
        //await registerPage.inputAnswer('Apalko');
        //await browser.pause(1000);
        await registerPage.checkPassLength();
    });
})

// $x('//div[@class="error"]') - error email must be unique 