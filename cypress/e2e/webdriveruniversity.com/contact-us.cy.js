import HomePage_PO from '../../support/pageObject/webdriveruni/Homepage_PO'
import ContactUS_PO from '../../support/pageObject/webdriveruni/ContactUS_PO'

/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
    const homepage = new HomePage_PO()
    const contactUS = new ContactUS_PO()
    before(() => {
        cy.fixture('example').then(data => {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        homepage.visitHomePage()
        homepage.openContactUS()
    })
    it('Should be able to submit a successful submissiom via contuct us form', () => {
        cy.document().should('have.property', 'charset').and('eql', 'UTF-8')
        cy.title().should('eql', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        contactUS.fillInAndSubmitForm(data.first_name, data.last_name, data.email, 'Just my comment')
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
    
    it('Should not be able to submit a successful submissiom via contuct us form as all the field are required', () => {
        contactUS.fillInAndSubmitForm(data.first_name, data.last_name, ' ', 'Just my comment')
        cy.get('body').contains('Error: Invalid email address')
    })
});