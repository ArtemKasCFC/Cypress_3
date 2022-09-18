/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
    before(() => {
        cy.fixture('example').then(data => {
            globalThis.data = data
        })
    })
    it('Should be able to submit a successful submissiom via contuct us form', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.document().should('have.property', 'charset').and('eql', 'UTF-8')
        cy.title().should('eql', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('[name="email"]').type(data.email);
        cy.get('textarea.feedback-input').type('My comment');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
    
    it('Should not be able to submit a successful submissiom via contuct us form as all the field are required', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type(data.first_name);
        cy.get('[name="last_name"]').type(data.last_name);
        cy.get('textarea.feedback-input').type('My comment');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
    })
});