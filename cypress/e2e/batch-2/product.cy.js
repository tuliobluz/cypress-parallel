describe('Action page', () => {
  const selectors = {
    container: '.container-xl',
  };

  beforeEach(() => {
    cy.visit('/features/actions');
  });

  it('displays GitHub Actions text in the container', () => {
    cy.get(selectors.container)
      .should('be.visible')
      .contains('GitHub Actions');
  });
});