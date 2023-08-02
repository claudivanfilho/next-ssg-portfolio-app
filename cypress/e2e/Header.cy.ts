/* eslint-disable */
// Disable ESLint to prevent failing linting inside the Next.js repo.
// If you're using ESLint on your project, we recommend installing the ESLint Cypress plugin instead:
// https://github.com/cypress-io/eslint-plugin-cypress

// Cypress E2E Test
describe("Use cases of the Header", () => {
  it("when back button is clicked should return to the previous page", () => {
    // Start from the index page
    cy.visit("http://localhost:3000/");

    cy.get("h1").contains("PokeSearch");

    cy.get("a").contains("Generation I").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/generation/1");
    });

    cy.get("button").contains("Back").click();

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/");
    });
  });

  it("when changed the lang selector should change the language of the page", () => {
    cy.visit("http://localhost:3000/");

    cy.get("[data-testid=lang-select]").select("fr");

    cy.contains("Créé par Claudivan");
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
