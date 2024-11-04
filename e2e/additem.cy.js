describe('adicionar item ao carrinho', () => {
  beforeEach(() => {
    cy.login(); 
  });

  it('Deve adicionar um item ao carrinho', () => {

    cy.get('[data-testid="adicionarNaLista"]').first().click();

    cy.get('[data-testid="product-increase-quantity"]').click(); 

    cy.get('[data-testid="adicionar carrinho"]').click();

    cy.get('.imagem[src="/static/media/trabalho.f431ee71.png"]')
  });
});