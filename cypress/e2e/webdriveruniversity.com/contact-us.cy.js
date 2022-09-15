/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
    it('Should be able to submit a successful submissiom via contuct us form', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.document().should('have.property', 'charset').and('eql', 'UTF-8')
        cy.title().should('eql', 'WebDriver | Contact Us')
        cy.url().should('include', 'contactus')
        cy.get('[name="first_name"]').type('Artem');
        cy.get('[name="last_name"]').type('Kas');
        cy.get('[name="email"]').type('justtest@email.com');
        cy.get('textarea.feedback-input').type('My comment');
        cy.get('[type="submit"]').click();
        cy.get('h1').should('have.text', 'Thank You for your Message!')
    });
    
    it('Should not be able to submit a successful submissiom via contuct us form as all the field are required', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#contact-us').invoke('removeAttr','target').click()
        // cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('Artem');
        cy.get('[name="last_name"]').type('Kas');
        cy.get('textarea.feedback-input').type('My comment');
        cy.get('[type="submit"]').click();
        cy.get('body').contains('Error: all fields are required')
    })
});