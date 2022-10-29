Cypress.Commands.add("seedAndVisit", (seeData = "fixture:todos") => {
  cy.server();
  cy.route("GET", "/api/todos", seeData);
  cy.visit("/");
});
