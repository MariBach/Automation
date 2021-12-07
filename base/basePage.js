export default class BasePage {
    async open (url) {
        await browser.url(url);
    }
    async waitForPageAvailable() {
        await browser.waitUntil(
            async () => (await BaseElement.isDisplayed() === true,
            {
                timeout: 5000,
                timeoutMsg: 'Page is not uploaded'
            })
        )
    }
}