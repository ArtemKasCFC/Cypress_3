/// <reference types="Cypress" />


describe("Test datepicker", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#datepicker").invoke("removeAttr", "target").click({force: true});
    })
    it("Select and assert the date from the datepicker", () => {
        const happyNewYear = new Date(2023, 0, 1)
        const year = happyNewYear.getFullYear(),
              monthStr = happyNewYear.toLocaleString('default', {month: 'long' }),
              day = happyNewYear.getDate()
        cy.get('.glyphicon-calendar').click()
        const selectYearAndMonth = () => {
            cy.get('.datepicker-switch').first().then((el) => {
                let yearAndMonth = el.text() 
                if(!yearAndMonth.includes(`${monthStr} ${year}`)){
                    cy.get('.next').first().click()
                    selectYearAndMonth()
                }
            })
        }
        selectYearAndMonth()
        cy.get('[class="day"]').contains('1').click()
        cy.get('.form-control').should('have.value', '01-01-2023')
    });
  });