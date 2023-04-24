const selectors = {
    container: '.container-xl',
  }
  
  describe('Action page', () => {
    beforeEach(() => {
      cy.visit('/features/actions');
    });
  
    it('Check action page', () => {
        cy.get(selectors.container)
            .should('be.visible')
            .contains('GitHub Actions')
    });
  });