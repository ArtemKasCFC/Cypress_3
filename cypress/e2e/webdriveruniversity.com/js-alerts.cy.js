/// <reference types="Cypress" />

describe('Handle JS alerts', () => {
    it('Confirm js alert contains the correct text', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button1').click()
        cy.on('window:alert', (str) => {
            expect(str).to.eql('I am an alert box!')
        })
    });
    it('Validate JS confirm box works correctly when clicking "OK"', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Press a button!')
            return true
        })
        cy.get('#confirm-alert-text').invoke('text').should('eql','You pressed OK!')
    });
    it('Validate JS confirm box works correctly when clicking "Cancel"', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        cy.get('#button4').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.eql('Press a button!')
            return false
        })
        cy.get('#confirm-alert-text').invoke('text').should('eql','You pressed Cancel!')
    });
    it('Validate JS confirm box by using a "stub"', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#popup-alerts').invoke('removeAttr','target').click()
        const stub = cy.stub()
        cy.on('window:confirm', stub)
        cy.get('#button4').click()
        .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Press a button!')
            return true
        })
        .then(() => {
            cy.get('#confirm-alert-text').invoke('text').should('eql','You pressed OK!')
        })
    });
});