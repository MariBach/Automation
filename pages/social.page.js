class SocialLink {
    get fbElement() {
        return $('#entity_sidebar');
    }
    get fbIcon() {
        let fb =$('a[aria-label="Button for the Facebook page of the shop"]');
        return fb ;
    }
    async clickSoclLink() {
        await this.fbIcon.click();
    }
    async switchTo() {
        await browser.switchWindow('https://www.facebook.com/owasp.juiceshop');
    }
}
export default new SocialLink();