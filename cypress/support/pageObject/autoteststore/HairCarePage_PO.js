class HairCarePage_PO {
    addToBasket() {
        data.productName.forEach(el => {
            cy.addToBasket(el)
         })
         cy.get('.cart_total').should('have.text', '$46.45')
    }
}

export default HairCarePage_PO