/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
    before(() => {
        cy.fixture('example').then(data => {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        cy.contactUsPage()
    })
    it('Should be able to submit a successful submissiom via contuct us form', () => {
        cy.document().should('have.property', 'charset').and('eql', 'UTF-8')
        cy.title().should('eql', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        cy.fillInAndSubmitForm(data.first_name, data.last_name, data.email, 'Just my comment')
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
    
    it('Should not be able to submit a successful submissiom via contuct us form as all the field are required', () => {
        cy.fillInAndSubmitForm(data.first_name, data.last_name, ' ', 'Just my comment')
        cy.get('body').contains('Error: Invalid email address')
    })
});