/// <reference types="Cypress" />

describe('Inspect Automationteststore items using chain of the commands', () => {
    it("Click on the first item using item's name ", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.prdocutname')
          .contains('Skinsheen Bronzer Stick')
          .click()        
    });
    it("Click on the first item using index", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.fixed_wrapper')
          .find('.prdocutname')
          .eq(0)
          .click()        
    });
})