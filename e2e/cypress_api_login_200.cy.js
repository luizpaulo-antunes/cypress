it('login com sucesso', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: 'luizpaulo.yamamoto@gmail.com',
        password: '1234'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('message', 'Login realizado com sucesso');
      expect(response.body).to.have.property('authorization');
      // Verifique se o token de autorização é válido (opcional)
    });
  });