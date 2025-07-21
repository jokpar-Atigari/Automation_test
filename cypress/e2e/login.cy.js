describe('Login Page', () => {

  it('logs in with valid credentials', () => {
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('john@example.com');
    cy.get('input[name="password"]').type('StrongPass123!');
    cy.get('button[type="submit"]').click();
    // Verify successful login
    cy.contains('button', 'Logout');
    cy.get('button[type="submit"]').should('be.visible');

    
  });
});