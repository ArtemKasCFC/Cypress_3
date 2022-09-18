/// <reference types="Cypress" />

describe('Verify checkboxes', () => {
    beforeEach(() => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
    })
    it('Check and validate checkbox', () => {
        cy.get('#checkboxes > :nth-child(1) > input').check().should('be.checked')
    });
    it('Uncheck and validate checkbox', () => {
        cy.get('#checkboxes > :nth-child(5) > input').uncheck().should('not.be.checked')
    });
    it('Check and validate checkboxes', () => {
        cy.get('input[type="checkbox"]').check(["option-1","option-2","option-3","option-4"]).should('be.checked')
    });
});