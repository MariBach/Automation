import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"

describe('Updating info at HomePage', () => {
    it('Buy the soldout item', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login page
        // User was registered with data: 'test_reg@test.com', 'test234'
        await loginPage.login('test@test.com', 'test123');
        await mainPage.checkSwitchLabel();

    })
})