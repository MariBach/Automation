import BasePage from '../base/basePage.js';
import Button from '../elements/button.js';

class SideBar extends BasePage{
    get sideMenu() {
        return new Button($('button[aria-label="Open Sidenav"]'), "Sidebar menu");
    }
    get sideBarScroll()
    {
        return $('div[class*="mat-drawer-inner"]');
    }
    get aboutUsInfo() {
        return new Button($('a[routerlink="/about" ]'), "About us page");
    }
    get feedbackPage() {
        return new Button($('(//div[@class="mat-list-item-content"])[5]'));
    }
    //get fbElement() {
    //    return $('#entity_sidebar');
    //}
    async clickSideBar() {
        await this.sideMenu.click();
    }
    async clickAboutUs() {
        await allure.addStep(`Open 'About Us' section`);
        await this.aboutUsInfo.click();
    }
    async openFeedbackPage() {
        await this.feedbackPage.click();
    }

   // async switchTo() {
   //     await browser.switchWindow('https://www.facebook.com/owasp.juiceshop');
    //}
}

export default new SideBar();