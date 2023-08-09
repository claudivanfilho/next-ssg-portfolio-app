describe("Use cases of the Pokemon Page", () => {
  it("when initiated the Pokemon Page should display the pokemon info", () => {
    cy.visit(`${Cypress.config().baseUrl}/generation/1/pokemon/bulbasaur`);
    cy.get("[data-testid=pokemon-header] [alt=bulbasaur]").should("exist");
    cy.get("[data-testid=pokemon-evolution-stages]").should("exist");
    cy.get("[data-testid=pokemon-stats]").should("exist");
    cy.get("[data-testid=pokemon-header]").should("exist");
    cy.percySnapshot();
  });

  it("when initiated the Pokemon Page with error should display the error message", () => {
    cy.visit(`${Cypress.config().baseUrl}/generation/1/pokemon/bulbasaur2`);
    cy.contains("Pokemon Not Found").should("exist");
  });

  it("when clicked in the pokemon evolution should change the page to the clicked pokemon", () => {
    cy.visit(`${Cypress.config().baseUrl}/generation/1/pokemon/bulbasaur`);
    cy.get("[data-testid=pokemon-evolution-stages] a").should("have.length", 3);
    cy.get("[data-testid=pokemon-evolution-stages] a").eq(1).click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/generation/1/pokemon/ivysaur`);
  });
});
