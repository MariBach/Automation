import mainPage from '../../pages/main.page.js';
import sideBar from '../../pages/sidebar.page.js';
import socialLink from '../../pages/social.page.js';

describe('Social link testing', () => {
    it('Social link testing browser', async () => {
        //Main Page
        await mainPage.open();
        //Sidebar
        await sideBar.clickSideBar();
        await sideBar.waitForScreenAvailable(sideBar.sideBarScroll);
        await sideBar.clickAboutUs();      
        await socialLink.clickSoclLink();
        await browser.pause(1000);
        //Social page
        await socialLink.switchTo();
        await expect(socialLink.fbElement).toBeExisting();
    })
})