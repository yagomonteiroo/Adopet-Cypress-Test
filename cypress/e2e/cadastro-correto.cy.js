describe("Página de Cadastro", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.wait(500);
  });
  
  

  it("Deve preencher os campos de formulário corretamente para cadastrar um novo usuário", () => {
    
    cy.get('[data-test="register-button"]').click();
    cy.wait(500);
    cy.get('[data-test="input-name"]').type("Teste Test");
    cy.get('[data-test="input-email"]').type("tester@email.com");
    cy.get('[data-test="input-password"]').type("Senha123");
    cy.get('[data-test="input-confirm-password"]').type("Senha123");
    cy.get('[data-test="submit-button"]').click();    
  })
})
