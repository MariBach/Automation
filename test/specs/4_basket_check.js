import mainPage from "../../pages/main.page.js"
import loginPage from "../../pages/login.page.js"
import basketPage from "../../pages/basket.js"

describe('Basket testing', () => {
    it('Add/remove to basket', async () => {
        //Main page
        await mainPage.open();
        await mainPage.openAccountMenu();
        await mainPage.navigateToLogin();                
        //Login page
        // User was registered with data: 'test_reg@test.com', 'test234'
        await loginPage.login('test@test.com', 'test123');
        //Check cart
        await basketPage.addApplePomace();
        await basketPage.checkFillCart();
        await mainPage.openCart();
        await basketPage.removeFromCart();
        await basketPage.checkEmptyCart();
    });
})    
//$x('(//button[contains(@class, "btn-basket")])[1]')
//$$('button[aria-label="Add to Basket"]')[1] -button add to cart
//#checkoutButton -purchase
//$$('button[aria-label="Add a new address"]') - move to delivery address input window
//$$('input[data-placeholder*="country"]') - input country
//$('input[data-placeholder*="name"]') - input name
//$$('input[data-placeholder*="mobile"]') - input mobile number
//$$('input[data-placeholder*="ZIP"]') -input ZIP
//$$('#address') -address input
//$$('input[data-placeholder*="city"]') - input city
//$$('#mat-input-21') - input state
//$$('#submitButton') - submit button
//$$('button[aria-label="Proceed to payment selection"]') - proceed to payment
//$('span.mat-radio-outer-circle')- choose delivery option
//$x('(//mat-radio-button[contains(@class,"accent")])[1]') - choose delivery speed
//$$('button[aria-label="Proceed to delivery method selection"]') after choosing delivery speed
//$('button[aria-label="Proceed to payment selection"]') - move to payment option step
//$$('div mat-expansion-panel:first-child')); - add credit/debit card panel
//$x('(//div/input)[1]') - input name of card owner
//$x('(//div/input)[2]]') -input card number
//$x('(//select)[1]') -selector for mothes
//$x('//option[text="2"]')- choose 2nd month
//$x('(//select)[1]') -selector for years
//$x('//*[@class="ng-star-inserted"][contains(text(),"2084")]') - option expired date
//$$('#submitButton') - submit button (to submit card details)
//$$('#mat-radio-43') - choose payment method (radio button)
//$$('[aria-label="Proceed to review"]') - final step for placing order
//$$('#checkoutButton') - confirm your order/
//$x('//h1[@class="confirmation"][contains(text(), "Thank you for your purchase!")]')

