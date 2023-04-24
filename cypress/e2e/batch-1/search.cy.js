const selectors = {
    headerSearch: '.header-search-input',
    menuUsers: '[data-search-type="Users"]',
    user: '.text-normal'
  }
  
  describe('Search github', () => {
    beforeEach(() => {
      cy.visit('');
    });
  
    it('open user menu', () => {
        cy.get(selectors.headerSearch)
            .should('be.visible')
            .type('tuliobluz')
            .type('{enter}')

        const firstMenuUser = cy.get(selectors.menuUsers).first();
        firstMenuUser.click();

        cy.get(selectors.user)
            .should('be.visible')
            .contains('Túlio Luz')
    });
  });