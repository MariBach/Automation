export default class BasePage {
    async open (url) {
        await browser.url(url);
    }
    async waitForScreenAvailable(element) {
        await browser.waitUntil(
            async () => (await element.waitForDisplayed(),
            {
                timeout: 5000,
                timeoutMsg: 'Page is not uploaded'
            })
        )
    }
    
}