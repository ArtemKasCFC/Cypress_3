class HomePage_PO {
visitHomePage() {
    cy.visit(`${Cypress.env('homePageWDU')}`)
}
openContactUS(){
    cy.get('#contact-us').invoke('removeAttr', 'target').click()
}
}

export default HomePage_PO;