describe("Use cases of the initial page (Generations Page)", () => {
  it("when initiated should render the generations page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("a").contains("Generation I");
  });

  it("when tried to access an invalid route should display an error message", () => {
    cy.visit("http://localhost:3000/test");

    cy.contains("Page Not Found");
  });

  it("when clicked in a generation link should redirect to generation page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("a").contains("Generation I").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/generation/1");
    });
  });
});
