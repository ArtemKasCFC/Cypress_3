/// <reference types="Cypress" />

describe('Test Contact Us form via WebdriverUni', () => {
    it('Should be able to submit a successful submissiom via contuct us form', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('Artem');
        cy.get('[name="last_name"]').type('Kas');
        cy.get('[name="email"]').type('justtest@email.com');
        cy.get('textarea.feedback-input').type('My comment');
        cy.get('[type="submit"]').click();
    });
    
    it('Should not be able to submit a successful submissiom via contuct us form as all the field are required', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html');
        cy.get('[name="first_name"]').type('Artem');
        cy.get('[name="last_name"]').type('Kas');
        cy.get('textarea.feedback-input').type('My comment');
        cy.get('[type="submit"]').click();
    })
});