/// <reference types="Cypress" />

describe('Test Contact Us form via Auto test store', () => {
    it('Should be able to submit a successful submissiom via contuct us form', () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get("a[href$='contact']").click().then(linkText => {
            cy.log(linkText.text())
        })
        // cy.xpath("//a[contains(@href, 'contact')]").click()  --- With xpath
        cy.get('#ContactUsFrm_first_name').type('Artem')
        cy.get('#ContactUsFrm_email').type('justemailfortest@email.com')
        cy.get('#ContactUsFrm_email').should('have.attr', 'name', 'email')
        cy.get('#ContactUsFrm_enquiry').type('just hello')
        cy.get("button[title='Submit']").click()
        cy.get('.mb40 > :nth-child(3)').should('have.text', 'Your enquiry has been successfully sent to the store owner!')
    });
})