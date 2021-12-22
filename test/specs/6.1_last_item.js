import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import basketPage from "../../pages/basket.js"
import orderPage from "../../pages/order.page.js"
import paymentOptions from "../../pages/payment.options.js"
import inputData from '../../pages/inputs.js'

describe('Updating info at HomePage', () => {
    it('Buy the last item', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();                
        //Login page
        await loginPage.login(inputData.validMail, inputData.validPswd);
        //Check cart
        //await basketPage.addApplePomace();
        await mainPage.closeCockieMessage();
        await basketPage.addJSartwork();
        await mainPage.openCart();
        await orderPage.checkOut();
        await orderPage.chooseDeliveryAddress();
        await orderPage.moveToPaymentInfo();
        await orderPage.chooseDeliverySpeed();
        await orderPage.proccedToDeliveryMethod();
        await paymentOptions.choosePaymentMethod();
        await paymentOptions.proceedToReview();        
        await orderPage.checkOut(); //move to order confirmation test
        await mainPage.gotoHomePage();
        await mainPage.checkSwitchLabel();
    });
})  
// $x('(//span[contains(text(), "Only 1 left")])[1]') -locator for ribbon 'last item'
// $x('(//span[contains(text(), "Sold Out")])[1]') - locator for ribbon 'sold out'