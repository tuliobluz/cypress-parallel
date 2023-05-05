describe('Solutions page', () => {
  const selectors = {
    container: '.container-xl',
  };

  beforeEach(() => {
    cy.visit('/solutions/ci-cd/');
  });

  it('displays CI/CD solution text in the container', () => {
    cy.get(selectors.container)
      .should('be.visible')
      .contains('CI/CD solution');
  });
})