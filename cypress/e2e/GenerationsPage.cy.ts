describe("Use cases of the initial page (Generations Page)", () => {
  it("when initiated should render the generations page", () => {
    cy.visit(Cypress.config().baseUrl);
    cy.percySnapshot();
  });

  it("when tried to access an invalid route should display an error message", () => {
    cy.visit(`${Cypress.config().baseUrl}/test`);

    cy.contains("Page Not Found");
  });

  it("when clicked in a generation link should redirect to generation page", () => {
    cy.visit(Cypress.config().baseUrl);

    cy.get("a").contains("Generation I").click();

    cy.url().should("be.equal", `${Cypress.config().baseUrl}/generation/1`);
  });
});
