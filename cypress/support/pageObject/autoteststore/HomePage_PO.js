class HomePage_PO {
    visitHomePage() {
        cy.visit('https://www.automationteststore.com/')
    }

    selectHairCare() {
        cy.get('.nav-pills > :nth-child(7)').click()
    }
}

export default HomePage_PO