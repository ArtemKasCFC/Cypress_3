/// <reference types="Cypress" />

describe('Alias and invoke', () => {
    it("Find first product with 'invoke' and 'as'", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.nav-pills > :nth-child(6)').click()
        cy.get('.fixed_wrapper .prdocutname').eq(0).invoke('text').as('firstProduct')
        // cy.get('@firstProduct').its('length').should('be.gt', 5)
        cy.get('@firstProduct').should('have.length.at.least', 30)
        cy.get('@firstProduct').should('eql','Men+Care Clean Comfort Deodorant')
    });
    // it("Check the quantity of the products in the Home page", () => {
    //     cy.visit('https://www.automationteststore.com/')
    //     cy.get('.thumbnail').should('have.length', 16)
    // });
    // it.only("Check the quantity of the products in the Home page", () => {
    //     cy.visit('https://www.automationteststore.com/')
    //     cy.get('.thumbnail .productcart').eq(0).should('have.attr', 'title', 'Add to Cart')
    //     });
    it.only("Check the quantity of the products in the Home page and that the first product have attr [title = 'Add to Cart']", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.thumbnail').should('have.length', 16).eq(0).as('Product')
        cy.get('@Product').find('.productcart').should('have.attr', 'title', 'Add to Cart')
    });
})