/// <reference types="Cypress" />

describe('Browser navigation', () => {
    it('Confirm links redirect to the correct page', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        cy.url().should('include', 'contactus')
        cy.go('back')
        cy.url().should('eql', 'http://www.webdriveruniversity.com/')
        cy.get('#to-do-list').invoke('removeAttr','target').click()
        cy.url().should('include', 'To-Do-List')
        cy.go('back')
        cy.url().should('eql', 'http://www.webdriveruniversity.com/')
    });
});