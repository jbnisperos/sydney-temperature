Cypress.Commands.add('openHomePage',()=>{
    cy.visit('/')
})
import '@testing-library/cypress/add-commands';

import 'cypress-file-upload';
