import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import addressInfo from "../../pages/adressinfo.page.js";
import orderPage from "../../pages/order.page.js"
import basketPage from "../../pages/basket.js"
import paymentOptions from "../../pages/payment.options.js"

describe('Purchase flow testing', () => {
    it('Ordered fulfilled', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        await mainPage.closeCockieMessage();
        await browser.pause(2000);
        //Login page--- User was registered with data: 'test_reg@test.com', 'test234'
        await loginPage.login('test@test.com', 'test123');
        //add product to a cart
        await basketPage.addApplePomace();
        await mainPage.openCart();
        await browser.pause(1000);
        //start order fulfill
        await orderPage.checkOut();
        //input address info
        await orderPage.NewAddressOpen();
        await addressInfo.addressInfoInput("UA", "Mari", "12345678","0100","Tyraspolska str","Kyiv");
        await addressInfo.submitAddressInfo();
        await orderPage.chooseDeliveryAddress();
        await orderPage.moveToPaymentInfo();
        await orderPage.chooseDeliverySpeed();
        await orderPage.proccedToDeliveryMethod();
        await paymentOptions.openCardInputInfo();
        await paymentOptions.inputCardInfo('Mari', '1234567890987654', "10", "2089");
        await paymentOptions.submitCardInfo();      
        await paymentOptions.choosePaymentMethod();
        await paymentOptions.proceedToReview();
        await orderPage.checkOut();
        await orderPage.orderConfirmation();
       
    });
});
