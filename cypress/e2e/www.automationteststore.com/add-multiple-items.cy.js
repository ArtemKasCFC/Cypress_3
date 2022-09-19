/// <reference types="Cypress" />

describe('Check adding multiple items to the basket', () => {
    before(() =>{
        cy.fixture('products').then(data => {
            globalThis.data = data
        })
    })
    beforeEach(() => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.nav-pills > :nth-child(7)').click()
    })
    it("Add specific items to the basket", () => {
         data.productName.forEach(el => {
            cy.addToBasket(el)
         })
         cy.get('.cart_total').should('have.text', '$46.45')
    });
})