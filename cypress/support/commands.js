// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
// cy.visit(Cypress.env('homePageWDU'))
// cy.get('#contact-us').invoke('removeAttr','target').click()
   Cypress.Commands.add('contactUsPage', () => {
       cy.visit(`${Cypress.env('homePageWDU')}/Contact-Us/contactus.html`)
   })

   Cypress.Commands.add('selectProduct', productName => {
       cy.get('.fixed_wrapper .prdocutname').each((el) => {
           if (el.text().includes(productName)) {
               cy.wrap(el).click()
           }
       })
   })

   Cypress.Commands.add('addToBasket', productName => {
       cy.get('.fixed_wrapper .prdocutname').each((el, ind) => {
           if (el.text() === productName) {
               cy.log(productName)
               cy.get('.productcart').eq(ind).click()
           }
       })
   })

   Cypress.Commands.add('fillInAndSubmitForm', (firstname, lastname, email, comment) => {
       cy.get('[name="first_name"]').type(firstname);
       cy.get('[name="last_name"]').type(lastname);
       cy.get('[name="email"]').type(email);
       cy.get('textarea.feedback-input').type(comment);
       cy.get('[type="submit"]').click();
   })
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';
