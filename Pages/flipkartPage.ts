import { Page, Locator } from '@playwright/test';

export class FlipkartPage {
    page: Page;

    googleSearch: Locator;
    googleSearchFlipkart: Locator;
    Flipkartlink: Locator;
    popupClose: Locator;
    flipKartSearchField: Locator;
    FlipkartIphoneoption: Locator;

    constructor(page: Page) {
        this.page = page;

        this.googleSearch = page.getByRole('combobox', { name: 'Search' });

        this.googleSearchFlipkart = page.getByText('Flipkart', { exact: true });

        this.Flipkartlink = page.getByRole('link', {
            name: 'Flipkart Flipkart https://www'
        });

        this.popupClose = page.getByRole('button', { name: '✕' });

        this.flipKartSearchField = page.getByRole('textbox', {
            name: 'Search for Products, Brands'
        });

        this.FlipkartIphoneoption = page.getByRole('link', {
            name: 'apple iphone 16 plus black 128 gb in Mobiles'
        });
    }
}