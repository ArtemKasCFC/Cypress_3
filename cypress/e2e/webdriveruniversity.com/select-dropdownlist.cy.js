/// <reference types="Cypress" />

describe('Interact wiwh DDL', () => {
    it('Select specific values by value and text', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
        cy.get('#dropdowm-menu-1').select('sql').contains('SQL')
        cy.get('#dropdowm-menu-2').select('JUnit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-3').select('JavaScript').should('have.value', 'javascript')
    });

    it('Choose one and then change to another', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#dropdown-checkboxes-radiobuttons').invoke('removeAttr','target').click()
        cy.get('#dropdowm-menu-2').select('JUnit').should('have.value', 'junit')
        cy.get('#dropdowm-menu-2').select('TestNG').should('have.value', 'testng')
        cy.get('#dropdowm-menu-2').select('JUnit').should('have.value', 'junit') 
    });
})