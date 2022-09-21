import HomePage_PO from '../../support/pageObject/autoteststore/HomePage_PO'
import HairCarePage_PO from '../../support/pageObject/autoteststore/HairCarePage_PO'

/// <reference types="Cypress" />

describe('Check adding multiple items to the basket', () => {
    const hairCarePage = new HairCarePage_PO()
    const homePage = new HomePage_PO()
    
    before(() => {
        cy.fixture('products').then(data => {
            globalThis.data = data
        })
    })
    
    beforeEach(() => {
        homePage.visitHomePage()
        homePage.selectHairCare()
    })
    
    it("Add specific items to the basket", () => {
         hairCarePage.addToBasket()
    });
})