describe('Test 1', () => {
  it('Checks the form and various inputs', () => {
    cy.visit('http://localhost:3000')

    // Get the submission form
    cy.get('[data-testid="submission-form"]')

    // Get the name input
    cy.get('[data-testid="name-input"]').type('David Mishra')

    //  Verify that the value has been updated
    cy.get('[data-testid="name-input"]').should('have.value', 'David Mishra')

    // Get the email input
    cy.get('[data-testid="email-input"]').type('david.mishra@xyz.com')

    //  Verify that the value has been updated
    cy.get('[data-testid="email-input"]').should('have.value', 'david.mishra@xyz.com')

    // Get the destination input
    cy.get('[data-testid="destination-select"]').select('Europe')

    //  Verify that the value has been updated
    cy.get('[data-testid="destination-select"]').should('have.value', 'Europe')

    // Get the travellers-count input
    cy.get('[data-testid="travellers-count-input"]').type(5)

    //  Verify that the value has been updated
    cy.get('[data-testid="travellers-count-input"]').should('have.value', 5)

    // Get the budget input
    cy.get('[data-testid="budget-input"]').type(3000)

    //  Verify that the value has been updated
    cy.get('[data-testid="budget-input"]').should('have.value', 3000)

    //  Verify that the total budget is updated
    cy.get('[data-testid="total-budget"]').contains(15000)

    // check the submit
    cy.get('[data-testid="submit"]').click()

    // checks the submission confirm ui
    cy.get('[data-testid="confirmation-mesg"]')

    cy.get('[data-testid="dashboard-link-2"]').click()

    cy.url().should('include', '/dashboard')

  })
})


describe('Test 2', () => {
  it('Checks page links', () => {
    cy.visit('http://localhost:3000')

    // Checks if the form-page link works properly

    cy.get('[data-testid="form-page-link"]').click()

    cy.url().should('include', '/')


    // Checks if the dashboard link works properly
    cy.get('[data-testid="dashboard-page-link"]').click()

    cy.url().should('include', '/dashboard')
  })
})


describe('Test 3', () => {
  it('Checks dashboard page', () => {
    cy.visit('http://localhost:3000/dashboard')

    // Checks if data table is present
    cy.get('[data-testid="data-table"]')


    // Check if next button works properly
    cy.get('[data-testid="next-button"]').click()

    cy.get('[data-testid="curr-page"]').contains(2);


    // Check if prev button works properly
    cy.get('[data-testid="prev-button"]').click()

    cy.get('[data-testid="curr-page"]').contains(1);

    // Check the download csv link
    cy.get('[data-testid="csv-link"]')

  })
})