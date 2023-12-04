describe("Fundamental Tests", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
  it("Should Pass as well", () => {
    cy.visit("https://example.cypress.io");
  });
  it("Visit own server", () => {
    cy.visit("http://localhost:3000/fundamentals");
  });

  it("submits an invalid email and checks for error message", () => {
    cy.visit("http://localhost:3000/forms");
    cy.get("#email-input").type("invalidemail");
    cy.get("#submit-button").click();
    cy.get("#subMessage").should("contain", "Invalid email");
  });

  it("submits a valid email and checks for success message", () => {
    cy.visit("http://localhost:3000/forms");
    cy.get("[id=email-input]").type("validemail@example.com");
    cy.get("[id=submit-button]").click();
    cy.get("[id=subMessage]").should("contain", "Successfully subbed");
  });

  it("Accordion with more than 50 characters", () => {
    cy.visit("http://localhost:3000/examples");
    cy.get("accordionDetails").should("have.length", 100);
  });
});

describe("Fundamental Tests 2", () => {
  it("should pass", () => {
    expect(true).to.equal(true);
  });
  it("Accordion with more than 50 characters", () => {
    cy.visit("http://localhost:3000/examples");
    cy.get("[data-cy=accordion-item]").each(($el) => {
      cy.wrap($el)
        .find("[data-cy=accordion-summary]")
        .invoke("text")
        .should("have.length.greaterThan", 20);
      cy.wrap($el)
        .find("[data-cy=accordion-details]")
        .invoke("text")
        .should("have.length.greaterThan", 100);
    });
  });
});
