class SideBar {
    get sideMenu() {
        return $('button[aria-label="Open Sidenav"]');
    }
    get aboutUsInfo() {
        return $('a[routerlink="/about" ]');
    }
    get fbIcon() {
        let fb =$('a[aria-label="Button for the Facebook page of the shop"]');
        return fb ;
    }
    get fbElement() {
        return $('#entity_sidebar');
    }
    async clickSideBar() {
        await this.sideMenu.click();
    }
    async clickAboutUs() {
        await this.aboutUsInfo.click();
    }
    async clickSoclLink() {
        await this.fbIcon.click();
    }
    async switchTo() {
        await browser.switchWindow('https://www.facebook.com/owasp.juiceshop');
    }
}

export default new SideBar();