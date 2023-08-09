describe("Use cases of the Header", () => {
  it("when back button is clicked should return to the previous page", () => {
    cy.visit(Cypress.config().baseUrl);
    cy.get("h1").contains("PokeSearch").should("exist");
    cy.get("a").contains("Generation I").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/generation/1`);
    cy.get("button").contains("Back").click();
    cy.url().should("eq", `${Cypress.config().baseUrl}/`);
  });

  it("when changed the lang selector should change the language of the page", () => {
    cy.visit(Cypress.config().baseUrl);
    cy.get("[data-testid=lang-select]").select("fr");
    cy.contains("Créé par Claudivan").should("exist");
  });
});
