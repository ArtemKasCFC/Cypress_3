/// <reference types="Cypress" />


describe("Traversing DOM elements in Cypress", () => {
  beforeEach(() => {
    cy.visit("http://webdriveruniversity.com/");
    cy.get("#data-table").invoke("removeAttr", "target").click({
      force: true
    });
  })
  it("children() to get the children of DOM elements", () => {
    cy.get('.traversal-breadcrumb').children('.active').should('have.text', 'Contact Us')
  });

  it("closest() to validate the closest ancestor DOM element", () => {
    cy.get('.traversal-badge').closest('ul').should('have.class', 'list-group')
  });

  it("eq() to retrieve a specific element based on index", () => {
    cy.get('.traversal-drinks-list > *').eq(2).should('have.text', 'Milk')
  });

  it("filter() to retrieve DOM elements that match a specific selector", () => {
    cy.get('[data-toggle="buttons"] > *').filter('.active').should('have.text', 'Button-1')
  });

  it("find() to retrieve DOM elements of a given selector", () => {
    cy.get('.traversal-pagination').find('li a').should('have.length', 7)
  });

  it("first() to retrieve the first DOM element within elements ", () => {
    cy.get('.traversal-table tbody td').first().should('have.text', 'Andy')
  });

  it("last() to retrieve the last DOM element within elements", () => {
    cy.get('.traversal-table tbody td').last().should('have.text', 'Scott')
  });

  it("next() to get the next sibling DOM element within elements", () => {
    cy.get('#tea').next().next().should('have.text', 'Espresso')
  });

  it("nextAll() to get all of the next sibling DOM elements within elements", () => {
    cy.get('#tea').nextAll().should('have.length', 3)
  });

  it("nextUntil() to get all of the next sibling DOM elements within elements until another element", () => {
    cy.get('#coffee').nextUntil('#sugar').should('have.length', 3)
  });

  it("not() to remove DOM element(s) from the set of elements", () => {
    cy.get('.traversal-button-states > *').not('.disabled').should('not.have.class', 'disabled').and('have.length', 3)
  });

  it("parent() To get parent DOM element of elements", () => {
    cy.get('mark').parent().should('contain', 'Lorem ipsum dolor sit ame')
  });

  it("parents() to get parents DOM element of elements", () => {
    cy.get('cite').parents().should('match', 'blockquote')
  });

  it("prev() to get the previous sibling DOM element within elements", () => {
    cy.get('#tea').prev().should('have.text', 'Coffee')
  });

  it("prevAll() to get all previous sibling DOM elements within elements", () => {
    cy.get('.sales').prevAll().should('have.length', 2)
  });

  it("prevUntil() to get all previous sibling DOM elements within elements until other element", () => {
    cy.get('#veggie').prevUntil('#fruits').should('have.length', 5)
  });

  it("siblings() To get all sibling DOM elements of elements", () => {
    cy.get('.btn-group-toggle .active').siblings().should('have.length', 3)
  });
});
  