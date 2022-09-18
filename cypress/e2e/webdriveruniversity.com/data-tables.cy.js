/// <reference types="Cypress" />


describe("Handling data", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#data-table").invoke("removeAttr", "target").click({force: true});
    })
    it("Calculate and assert the total age of the users", () => {
        let userData = [],
            totalAge = 0;
        cy.get('#thumbnail-1 td').each(($el, ind) => {
            userData[ind] = $el.text()

            if(+userData[ind]){
                totalAge += +userData[ind]
            }
        }).then(() => {
            expect(totalAge).to.eql(322)
        }) 
    });

    it("Assert the age of the given user based on the lastname", () => {
        cy.get('#thumbnail-1 td:nth-child(2)').each(($el, ind) => {
            let text = $el.text()
            if (text === 'Woods'){
                cy.get('#thumbnail-1 td:nth-child(2)').eq(ind).next().then($age => {
                    expect($age.text()).to.eql('80')
                })
            }
        })
    });
  });