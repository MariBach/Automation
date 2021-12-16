import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import basketPage from "../../pages/basket.js"


describe('Basket testing', () => {
    it('Buy the soldout item', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login page
        // User was registered with data: 'test_reg@test.com', 'test234'
        await loginPage.login('test@test.com', 'test123');
        //Check cart
        //await basketPage.addApplePomace();
        await basketPage.addJSartwork();
        await mainPage.checkLastItem();
        await browser.pause(1000);
    })
})    