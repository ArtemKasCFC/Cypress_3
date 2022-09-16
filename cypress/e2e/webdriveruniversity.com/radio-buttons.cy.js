/// <reference types="Cypress" />

describe('Verify radio-buttons', () => {
    it('Check specific radio-button', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
        cy.get('[name="color"]').eq(1).check()
        cy.get('[name="color"]').first().check()
    });

    it('Check the states of the specific radio-buttons', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
        cy.get('[value="lettuce"]').should('not.be.checked')
        cy.get('[value="pumpkin"]').should('be.checked')
        cy.get('[value="lettuce"]').check().should('be.checked')
        cy.get('[value="pumpkin"]').should('not.be.checked')
        cy.get('[value="cabbage"]').should('be.disabled')
    });
})