/// <reference types="Cypress" />

describe('Verify autocomplete field', () => {
    it('Select specific product', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#autocomplete-textfield').invoke('removeAttr','target').click()
        cy.get('#myInput').type('b')
        cy.get('#myInputautocomplete-list > *').each($el => {
            const prod = $el.text()
            const prodForSelect = 'Bacon'

            if(prod === prodForSelect){
                $el.trigger('click')

                cy.get('#submit-button').click()
                cy.url().should('include', `food-item=${prodForSelect}`)
            }
        }).then(() => {
            cy.get('#myInput').type('g')
            cy.get('#myInputautocomplete-list > *').each($el => {
                const prod = $el.text()
                const prodForSelect = 'Grapes'
    
                if(prod === prodForSelect){
                    $el.trigger('click')
    
                    cy.get('#submit-button').click()
                    cy.url().should('include', `food-item=${prodForSelect}`)
                }
            })
        })
    });
})