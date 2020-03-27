describe('Viewing season page', function() {
  it('Navigates to season pg with no errors', () => {
    cy.visit('/');

    cy.url().should('eq', 'http://localhost:8000/');

    cy.get(`[data-automation-id="contentgrid__contentcard--season"]`)
      .first()
      .click();

    cy.url().should('eq', 'http://localhost:8000/winter');
  });
});
