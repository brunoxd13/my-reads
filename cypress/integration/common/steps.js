import { Given } from "cypress-cucumber-preprocessor/steps";

Given(`I open page`, () => {
  cy.visit("/");
});
