it('Deve retornar erro para todos os campos obrigatórios', () => {
  cy.request({
    method: 'POST',
    url: 'https://serverest.dev/login',
    body: {
      
    },
    failOnStatusCode: false 
  }).then((response) => {
    expect(response.status).to.eq(400);
    expect(response.body).to.have.property('message', 'Todos os campos são obrigatórios');
  });
});