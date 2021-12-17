import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import basketPage from "../../pages/basket.js"
import orderPage from "../../pages/order.page.js"
import paymentOptions from "../../pages/payment.options.js"

describe('Updating info at HomePage', () => {
    it('Buy the last item', async () => {
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
        await mainPage.openCart();
        await orderPage.checkOut();
        await orderPage.chooseDeliveryAddress();
        await orderPage.moveToPaymentInfo();
        await orderPage.chooseDeliverySpeed();
        await orderPage.proccedToDeliveryMethod();
        await paymentOptions.choosePaymentMethod();
        await paymentOptions.proceedToReview();
        await orderPage.checkOut();
        await browser.pause(2000);
        await mainPage.gotoHomePage();
        await mainPage.checkSwitchJSartwork();
        await browser.pause(1000);
        //await basketPage.addJSartwork();
        //await basketPage.removeFromCart();
        //await basketPage.checkEmptyCart();
    });
})  