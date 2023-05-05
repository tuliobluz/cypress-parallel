describe('Search github', () => {
  const selectors = {
    headerSearch: '.header-search-input',
    menuUsers: '[data-search-type="Users"]',
    user: '.text-normal',
  };

  beforeEach(() => {
    cy.visit('');
  });

  it('open user menu', () => {
    const searchTerm = 'tuliobluz';
    cy.get(selectors.headerSearch)
      .should('be.visible')
      .type(searchTerm + '{enter}');

    cy.get(selectors.menuUsers)
      .first()
      .click();

    cy.get(selectors.user)
      .should('be.visible')
      .contains('Túlio Luz');
  });
});