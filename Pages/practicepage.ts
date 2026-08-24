import { Page, Locator } from '@playwright/test';

export class PracticePage {
    page: Page;

    radioButton: Locator;
    hoverButton: Locator;
    Gototopbutton: Locator;
    dropdown: Locator;
    textboxField: Locator;
    Alertbutton: Locator;
    option1: Locator;
    option2: Locator;
    openingHours: Locator;
    image: Locator;
    logo: Locator;

    constructor(page: Page) {
        this.page = page;

        this.radioButton = page.locator('label')
            .filter({ hasText: 'Radio1' })
            .getByRole('radio');

        this.hoverButton = page.getByRole('button', { name: 'Mouse Hover' });

        this.Gototopbutton = page.getByRole('link', { name: 'Top' });

        this.dropdown = page.getByRole('combobox');

        this.textboxField = page.getByRole('textbox', {
            name: 'Enter Your Name'
        });

        this.Alertbutton = page.locator('#alertbtn');

        this.option1 = page.locator('#checkBoxOption1');

        this.option2 = page.locator('#checkBoxOption2');

        this.openingHours = page.getByText(
            'Opening Hours : Monday to Saturay - 8 Am to 5 Pm'
        );

        this.image = page.getByRole('img');

        this.logo = page.locator('img.logoClass');
    }
}