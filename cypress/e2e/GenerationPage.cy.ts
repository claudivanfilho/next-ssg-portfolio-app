describe("Use cases of the Generation Page", () => {
  it("when initiated the generation page should display the page info", () => {
    cy.visit("http://localhost:3000/generation/1");
    cy.contains("Region");
    cy.contains("Pokemons: 151");
  });

  it("when clicked in a pokemon in the listing should redirec to pokemon page", () => {
    cy.visit("http://localhost:3000/generation/1");
    cy.get("[data-testid=pokemon-listing]").within(() => {
      cy.get("a").contains("bulbasaur").click();
    });

    cy.get("[data-testid=pokemon-details-section]").should("not.exist");

    cy.location().should((loc) => {
      expect(loc.pathname).to.eq("/generation/1/pokemon/bulbasaur");
    });
  });

  it("when searching for a pokemon should display the correct one in the listing", () => {
    cy.visit("http://localhost:3000/generation/1");

    cy.get("[data-testid=pokemon-listing]").within(() => {
      cy.get("#search-input").type("but");

      cy.get("a").should("have.length", 3);
      cy.get("a").contains("kabuto");
      cy.get("a").contains("butterfree");
      cy.get("a").contains("kabutops");
    });
  });

  it("when searching for an unknown pokemon should display nothing in the listing", () => {
    cy.visit("http://localhost:3000/generation/1");

    cy.get("[data-testid=pokemon-listing]").within(() => {
      cy.get("#search-input").type("bbb");

      cy.get("a").should("have.length", 0);
    });
  });
});
