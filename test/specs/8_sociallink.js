import mainPage from '../../pages/main.page.js';
import sideBar from '../../pages/sidebar.page.js';
import socialPage from '../../pages/social.page.js';
import socialLink from '../../pages/social.page.js';

describe('Social link testing', () => {
    it('Social media link open', async () => {
        //Main Page
        await mainPage.open();
        //Sidebar
        await sideBar.clickSideBar();
        await sideBar.waitForScreenAvailable(sideBar.sideBarScroll);
        await sideBar.clickAboutUs();
        await socialPage.waitForScreenAvailable(socialPage.aboutUsPage);
        await socialLink.clickSoclLink();
        //Social page
        await socialLink.switchTo();
        await expect(socialLink.fbElement).toBeExisting();
    })
})