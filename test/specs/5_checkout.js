import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import addressInfo from "../../pages/adressinfo.page.js";
import orderPage from "../../pages/order.page.js"
import basketPage from "../../pages/basket.js"
import paymentOptions from "../../pages/payment.options.js"
import inputData from '../../pages/inputs.js'

describe('Purchase flow testing', () => {
    it('Placing order', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        await mainPage.closeCockieMessage();
        await loginPage.login(inputData.validMail, inputData.validPswd);
        //add product to a cart
        await basketPage.addApplePomace();
        await mainPage.openCart();
        //start check out 
        await orderPage.checkOut();
        //input address info
        await orderPage.NewAddressOpen();
        await addressInfo.addressInfoInput(inputData.country, inputData.userName, inputData.mobileNumber, inputData.zip, inputData.address, inputData.city);
        //await addressInfo.addressInfoInput("UA", "Mari", "12345678", "0100", "Tyraspolska str", "Kyiv");
        await addressInfo.submitAddressInfo();
        await orderPage.chooseDeliveryAddress();
        await orderPage.moveToPaymentInfo();
        await orderPage.chooseDeliverySpeed();
        await orderPage.proccedToDeliveryMethod();
        await paymentOptions.openCardInputInfo();
        await paymentOptions.inputCardInfo(inputData.userName, inputData.cardNumber, inputData.expireMonth, inputData.expireYear);
        await paymentOptions.submitCardInfo();      
        await paymentOptions.choosePaymentMethod();
        await paymentOptions.proceedToReview();
        await orderPage.checkOut();
        await orderPage.orderConfirmation();       
    });
});
