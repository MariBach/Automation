import mainPage from '../../pages/main.page.js';
import sideBar from '../../pages/sidebar.page.js';
import socialLink from '../../pages/social.page.js';

describe('Social link testing', () => {
    it('Social link testing browser', async () => {
        //Main Page
        await mainPage.open();
        await browser.pause(1000);

        //Sidebar
        await sideBar.clickSideBar();
        await sideBar.clickAboutUs();
        await browser.pause(3000);
        await socialLink.clickSoclLink();
        //Social page
        await socialLink.switchTo();
        await browser.pause(1000);
        await socialLink.waitForPageAvailable();
        await expect(socialLink.fbElement).toBeExisting();
    })
})