describe('Clicking return to homepage link', () => {
  it('Returns user to homepage', () => {
    cy.visit('/summer');
    cy.url().should('eq', 'http://localhost:8000/summer/');

    cy.get(`[data-automation-id="contentcard__homepg-link"]`).click();

    cy.url().should('eq', 'http://localhost:8000/');
  });
});
