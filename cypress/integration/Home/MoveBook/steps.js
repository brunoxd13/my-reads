import { Then } from "cypress-cucumber-preprocessor/steps";

Then(`I move all books to {string}`, shelf => {
  cy.getAllByText(shelf).click({ multiple: true });
});
