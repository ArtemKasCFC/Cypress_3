/// <reference types="Cypress" />

describe('Mouse actions', () => {
    it('Scroll element into view', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
       
    });

    it('Drag and drop the element', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#draggable').trigger('mousedown', {which : 1})
        cy.get('#droppable').trigger('mousemove').trigger('mouseup', {force: true})
    });

    it('Perform a double mouse click', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#double-click').dblclick().then($el => {
            expect($el).to.have.class('double')
        })
       
    });

    it('Hold down the left mouse button on the given element', () => {
        cy.visit('http://www.webdriveruniversity.com/')
        cy.get('#actions').scrollIntoView().invoke('removeAttr','target').click()
        cy.get('#click-box').trigger('mousedown').then($el => {
            expect($el).to.have.css('background-color', 'rgb(0, 255, 0)')
            expect($el.text()).to.eql('Well done! keep holding that click now.....')
        })
    });
})