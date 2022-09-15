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
    it("Check the quantity of the products in the Home page and that the first product have attr [title = 'Add to Cart']", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.thumbnail').should('have.length', 16).eq(0).as('Product')
        cy.get('@Product').find('.productcart').should('have.attr', 'title', 'Add to Cart')
    });
    it.only("Calculate the total price of the products", () => {
        cy.visit('https://www.automationteststore.com/')
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('normalPrice')
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('salePrice')

        let totalPrice = 0

        cy.get('@normalPrice').then($textPrice => {
            let itemsTotal = 0,
                item = $textPrice.split('$')
            
            for(let i = 0; i < item.length; i++){
                itemsTotal += +item[i]
            }

            totalPrice += itemsTotal
            cy.log(`Normal price is ${totalPrice}`)
        })

        cy.get('@salePrice').then($textPrice => {
            let saleItemsTotal = 0,
                saleItem = $textPrice.split('$')
            
            for(let i = 0; i < saleItem.length; i++){
                saleItemsTotal += +saleItem[i]
            }

            totalPrice += saleItemsTotal
            cy.log(`Total price is ${totalPrice}`)
        })

    })
    });

