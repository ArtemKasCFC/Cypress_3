/// <reference types="Cypress" />

describe('Test Contact Us form via Auto test store', () => {
    it('Should be able to submit a successful submissiom via contuct us form', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.info_links_footer > :nth-child(5) > a').click()
        cy.get('#ContactUsFrm_first_name').type('Artem')
        cy.get('#ContactUsFrm_email').type('justemailfortest@email.com')
        cy.get('#ContactUsFrm_enquiry').type('just hello')
        cy.get('.col-md-6 > .btn').click()
    });
})