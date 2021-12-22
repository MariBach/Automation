import mainPage from "../../pages/main.page.js"; 
describe('User Review', () => {
    it("Check review published", async () => {
        await mainPage.open();
        await mainPage.openApJuiceInfo();
        await mainPage.openReviewSection();
        await mainPage.checkReviewAuthor();
    })
})