describe('adicionar item ao carrinho', () => {
    beforeEach(() => {
      cy.login(); 
    });
  
    it('pesquisar nome do item', () => {
  
        cy.get('[data-testid="pesquisar"]').type('Maria');

        cy.get('[data-testid="botaoPesquisar"]').click();

        cy.get('h5.card-title.negrito').should('contain', 'Maria Sophia Silva');
  
      
    });
  });














