export {}

describe('DashboardScreen E2e', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should init with loading message', () => {
    cy.get('h1').should('have.text', 'loading')
  })

  it('should screen have welcome message', () => {
    cy.wait(5000).get('h1').should('have.text', 'Get message with success')
  })
})
