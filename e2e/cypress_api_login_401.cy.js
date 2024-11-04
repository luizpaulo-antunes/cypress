

it('Deve retornar erro para email ou senha inválidos', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: 'email-invalido@qa.com',
        password: '2134124'
      },
      failOnStatusCode: false 
    }).then((response) => {
      expect(response.status).to.eq(401);
      expect(response.body).to.have.property('message', 'Email e/ou senha inválidos');
    });
  });