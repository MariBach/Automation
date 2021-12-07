import BasePage from '../base/basePage.js';
import Button from '../elements/button.js';

class SideBar extends BasePage{
    get sideMenu() {
        return new Button($('button[aria-label="Open Sidenav"]'), "Sidebar menu");
    }
    get aboutUsInfo() {
        return new Button($('a[routerlink="/about" ]'), "About us page");
    }
    //get fbIcon() {
    //    let fb =$('a[aria-label="Button for the Facebook page of the shop"]');
    //    return fb ;
    //}
    //get fbElement() {
    //    return $('#entity_sidebar');
    //}
    async clickSideBar() {
        await this.sideMenu.click();
    }
    async clickAboutUs() {
        await this.aboutUsInfo.click();
    }
   // async clickSoclLink() {
   //     await this.fbIcon.click();
   // }
   // async switchTo() {
   //     await browser.switchWindow('https://www.facebook.com/owasp.juiceshop');
    //}
}

export default new SideBar();