import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import basketPage from "../../pages/basket.js"
import inputData from '../../pages/inputs.js'

describe('Updating info at HomePage', () => {
    it('Buy the soldout item', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();
        //Login page
        await loginPage.login(inputData.validMail, inputData.validPswd);
        //await basketPage.addJSartwork();
        await mainPage.closeCockieMessage();
        await basketPage.addFacemask();
        await mainPage.checkLastItem();
    })
})    