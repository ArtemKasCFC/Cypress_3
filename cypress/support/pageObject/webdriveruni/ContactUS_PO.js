class ContactUS_PO {
    fillInAndSubmitForm (firstname, lastname, email, comment) {
        cy.get('[name="first_name"]').type(firstname);
        cy.get('[name="last_name"]').type(lastname);
        cy.get('[name="email"]').type(email);
        cy.get('textarea.feedback-input').type(comment);
        cy.get('[type="submit"]').click();
    }
}

export default ContactUS_PO