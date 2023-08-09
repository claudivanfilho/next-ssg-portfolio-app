describe("Use cases of the Generation Page", () => {
  it("when initiated the generation page should display the page info", () => {
    cy.visit(`${Cypress.config().baseUrl}/generation/1`);
    cy.contains("Region").should("exist");
    cy.contains("Pokemons: 151").should("exist");
    cy.percySnapshot();
  });

  it("when clicked in a pokemon in the listing should redirect to pokemon page", () => {
    cy.visit(`${Cypress.config().baseUrl}/generation/1`);
    cy.get("[data-testid=pokemon-details-section]").should("not.exist");
    cy.get("[data-testid=pokemon-listing] a").contains("bulbasaur").click();
    cy.get("[data-testid=pokemon-details-section]").should("exist");
    cy.url().should("eq", `${Cypress.config().baseUrl}/generation/1/pokemon/bulbasaur`);
  });

  it("when searching for a pokemon should display the correct one in the listing", () => {
    cy.visit(`${Cypress.config().baseUrl}/generation/1`);
    cy.get("#search-input").type("but");
    cy.get("[data-testid=pokemon-listing] a").should("have.length", 3);
    cy.get("[data-testid=pokemon-listing] a").contains("kabuto").should("exist");
    cy.get("[data-testid=pokemon-listing] a").contains("butterfree").should("exist");
    cy.get("[data-testid=pokemon-listing] a").contains("kabutops").should("exist");
  });

  it("when searching for an unknown pokemon should display nothing in the listing", () => {
    cy.visit(`${Cypress.config().baseUrl}/generation/1`);
    cy.get("#search-input").type("bbb");
    cy.get("[data-testid=pokemon-listing] a").should("have.length", 0);
  });
});
