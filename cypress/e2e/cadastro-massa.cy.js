import { users } from "../fixtures/usuarios.json";

describe('Página de Cadastro', ()=>{
  beforeEach(()=>{
    cy.visit("https://adopet-frontend-cypress.vercel.app/")
    cy.wait(500)
    cy.get('[data-test="register-button"]').click()
    cy.wait(500);
  })

  users.forEach(user => {
    it('Deve preencher os campos do formuário corretamente para cadastrar um novo usuário', ()=>{

      cy.get('[data-test="input-name"]').clear().type(user.name)
      cy.get('[data-test="input-email"]').clear().type(user.email)
      cy.get('[data-test="input-password"]').clear().type(user.password)
      cy.get('[data-test="input-confirm-password"]').clear().type(user.password)
      cy.get('[data-test="submit-button"]').click() 

    })
  })
})


