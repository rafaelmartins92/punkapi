describe("Adding new beer on list", () => {
  beforeEach("visit listing beers page", () => {
    cy.visit("/");
  });

  it("Go to add beer page and add a new beer", () => {
    cy.get("#btn-go_to_add_beer").click({ force: true });
    cy.get("#image_url").type(
      "https://www.imigrantesbebidas.com.br/bebida/images/products/full/71062-cerveja-budweiser-long-neck-330ml.jpg"
    );
    cy.get("#name").type("Budweiser");
    cy.get("#description").type(
      "A cerveja Budweiser possui sabor leve, cor clara e aroma discreto. As lascas de Beechwood, madeira especial utilizada no processo de fermentação e maturação da Budweiser, conferem um sabor equilibrado, marcante no início e suave no final."
    );
    cy.get("#btn-add_beer").click({ force: true });
    cy.get("#hero_container").scrollIntoView({
      easing: "linear",
      offset: { top: 500, left: 0 },
    });
  });
});
