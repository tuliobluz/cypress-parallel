const selectors = {
    container: '.container-xl',
  }
  
  describe('Solutions page', () => {
    beforeEach(() => {
      cy.visit('/solutions/ci-cd/');
    });
  
    it('Check action page', () => {
        cy.get(selectors.container)
            .should('be.visible')
            .contains('CI/CD solution')
    });
  });