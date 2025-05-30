describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.wait(2000);
    cy.contains('Register').click();
    cy.get('#customer\\.firstName').type('Ajanlekoko')
    cy.get('#customer\\.lastName').type('Olunlade')
  })
})