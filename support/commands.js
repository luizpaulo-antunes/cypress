Cypress.Commands.add('login', () => {
    cy.visit('https://front.serverest.dev/')
  
    cy.get('#email')
      .type('luizpaulo.yamamoto@gmail.com');
  
    cy.get('#password')
      .type('1234');
  
    cy.get('#root > div > div > form > button')
      .click();
  });