/// <reference types="Cypress" />

describe('Interate over elements', () => {
    it("Add a product to the basket", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.nav-pills > :nth-child(6)').click()
        cy.get('.fixed_wrapper .prdocutname').each((el, i) => {
            if(el.text().includes('ck IN2U Eau De Toilette Spray for Him')){
                cy.wrap(el).click()
            }
        }) 
        cy.get('.bgnone').should('have.text', "ck IN2U Eau De Toilette Spray for Him")  
    });
})