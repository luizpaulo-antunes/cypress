describe('adicionar item ao carrinho', () => {
    beforeEach(() => {
      cy.login(); 
    });
  
    it('limpar a lista', () => {
  
      cy.get('[data-testid="adicionarNaLista"]').first().click();
  
      cy.get('[data-testid="limparLista"]').click();

      cy.get('[data-testid="shopping-cart-empty-message"]').should('have.text', 'Seu carrinho está vazio');
  
    });
  });