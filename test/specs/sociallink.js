import mainPage from '../../pages/main.page.js'
import sideBar from '../../pages/sidebar.page.js'
describe('Social link testing', () => {
    it('Social link testing browser', async () => {
        //Main Page
        await mainPage.open();

        //Sidebar
        await sideBar.clickSideBar();
        await sideBar.clickAboutUs();
        await browser.pause(1000);
        await sideBar.clickSoclLink();
        await browser.pause(1000);
        await sideBar.switchTo();
        await browser.pause(1000);
        await expect(sideBar.fbElement).toBeExisting();
    })
})