/// <reference types="Cypress" />

describe('Interate over elements', () => {
    beforeEach(() => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.nav-pills > :nth-child(6)').click()
    })
    it("Add a product to the basket", () => {
        // cy.get('.fixed_wrapper .prdocutname').each((el, i) => {
        //     if(el.text().includes('ck IN2U Eau De Toilette Spray for Him')){
        //         cy.wrap(el).click()
        //     }
        // }) 
        cy.selectProduct('ck IN2U Eau De Toilette Spray for Him')
        cy.get('.bgnone').should('have.text', "ck IN2U Eau De Toilette Spray for Him")  
    });

    it("Add another product to the basket", () => {
        // cy.get('.fixed_wrapper .prdocutname').each((el, i) => {
        //     if(el.text().includes('ck IN2U Eau De Toilette Spray for Him')){
        //         cy.wrap(el).click()
        //     }
        // }) 
        cy.selectProduct('Men+Care Active Clean Shower Tool')
        cy.get('.bgnone').should('have.text', "Men+Care Active Clean Shower Tool")  
    });
})