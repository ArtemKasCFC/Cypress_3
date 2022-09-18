/// <reference types="Cypress" />


describe("Test to upload the file", () => {
    beforeEach(() => {
      cy.visit("http://webdriveruniversity.com/");
      cy.get("#file-upload").invoke("removeAttr", "target").click({force: true});
    })
    it("Upload 'laptop' file", () => {
        
        // With attachFile()
        // cy.fixture('1.7 laptop.png', 'base64').then(fileContent => {
        //     cy.get('#myFile').attachFile(
        //         {
        //             fileContent,
        //             fileName: '1.7 laptop.png',
        //             mimeType: 'image/png'
        //         },
        //         {
        //             uploadType: 'input'
        //         }
        //     )
        // })

        // With selectFile()
        cy.fixture('1.7 laptop.png', 'base64').as('laptop')
        cy.get('#myFile').selectFile('@laptop')
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) =>{
            expect(str).to.eql('Your file has now been uploaded!')
        })
    });

    it("Don't upload 'laptop' file", () => {
        cy.get('#submit-button').click()
        cy.on('window:alert', (str) =>{
            expect(str).to.eql('You need to select a file to upload!')
        })
    });
  });