import BasePage from "../base/basePage.js";
import BaseElement from "../base/baseElement.js";
import Button from "../elements/button.js";

class SocialLink extends BasePage{
    get fbElement() {
        return new BaseElement($('img[src*="profile_banners"]'), "Banner");
        //return new BaseElement($('#entity_sidebar'), "Logo in fb page");
    }
    get fbIcon() {
        return new Button ($('a[aria-label="Button for the Twitter page of the shop"]'), 'twitter icon');
    }
    async clickSoclLink() {
        await this.fbIcon.click();
    }
    async switchTo() {
        await allure.addStep(`Open social page`);
        await browser.switchWindow('https://twitter.com/owasp_juiceshop');
    }
    async waitForPageAvailable() {
        await browser.waitUntil(
            async () => (await this.fbElement.isDisplayed() === true,
            {
                timeout: 5000,
                timeoutMsg: 'Page is not uploaded'
            })
        )
    }
}
export default new SocialLink();

