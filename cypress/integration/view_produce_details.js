describe('View produce details', () => {
  it('Shows produce details', () => {
    cy.visit('/spring');
    cy.url().should('eq', 'http://localhost:8000/spring/');

    const focusedShowMoreBtn = cy
      .get(`[data-automation-id="contentcard__showmore--collapsed"]`)
      .first()
      .focus();

    cy.focused().should(
      'have.attr',
      'data-automation-id',
      'contentcard__showmore--collapsed'
    );

    focusedShowMoreBtn.click();

    cy.focused().should(
      'have.attr',
      'data-automation-id',
      'contentcard__showmore--expanded'
    );
  });
});
