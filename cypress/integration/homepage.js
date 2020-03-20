describe('Homepage', function() {
  it('Visits homepage with no error', () => {
    cy.visit('/');
  });
  // it('Displays app header', () => {
  //   cy.get(`[data-automation-id="freshlocal__header"]`).contains(
  //     'Fresh & Local Produce.'
  //   );
  // });
  // it('Displays app grid containing season cards', () => {
  //   cy.get(`[data-automation-id="freshlocal__contentgrid"]`);
  //   cy.get(`[data-automation-id="contentgrid__contentcard--season"]`).should(
  //     'have.length',
  //     4
  //   );
  // });
  // it('Displays season cards with season name and date range', () => {
  //   const seasonText = [
  //     'Winter December 21 - March 19 2020',
  //     'Spring March 19 - June 20 2020',
  //     'Summer June 20 - September 22 2020',
  //     'Fall September 22 - December 21 2020',
  //   ];

  //   cy.get(`[data-automation-id="contentgrid__contentcard--season"]`).each(
  //     (card, index, collection) => {
  //       cy.wrap({
  //         text: card
  //           .children()[0]
  //           .innerText.toString()
  //           .replace(/\s{2,}/g, ' ')
  //           .trim(),
  //       })
  //         .its('text')
  //         .should('eq', seasonText[index]);
  //     }
  //   );
  // });
});
