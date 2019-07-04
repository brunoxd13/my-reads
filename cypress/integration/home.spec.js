context("Scripted tests", () => {
  before(function() {
    cy.exec("yarn start");
  });

  describe("Access The Home Page", function() {
    it("Visit the homepage", function() {
      cy.visit("/");
    });

    it("Verify the title", function() {
      cy.title().should("eq", "My Reads");
    });
  });

  describe("Move books", function() {
    it("Visit the homepage", function() {
      cy.visit("/");
    });

    it("Move all books to want to read", function() {
      cy.getAllByText("Want to read").click({ multiple: true });
    });
  });
});
