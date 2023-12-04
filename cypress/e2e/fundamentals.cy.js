describe("Fundamental Tests", () => {
  //   it("should pass", () => {
  //     expect(true).to.equal(true);
  //   });
  it("Tests on fundamentals", () => {
    cy.visit("/fundamentals");
    cy.get("h1").should("contain", "Fundamentals");

    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
    cy.get('[data-test=accordion-item-1] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "be.visible"
    );
    cy.get('[data-test=accordion-item-1] div[role="button"]').click();
    cy.contains(/Your tests will exist in a describe block/i).should(
      "not.be.visible"
    );
  });
  //   it("Visit own server", () => {
  //     cy.visit("http://localhost:3000/fundamentals");
  //   });
  //   it("submits a valid email and checks for success message", () => {
  //     cy.visit("http://localhost:3000/forms");
  //     cy.get("[data-cy=email-input]").type("validemail@example.com");
  //     cy.get("[data-cy=submit-button]").click();
  //     cy.get("[data-cy=subMessage]").should("contain", "Successfully subbed");
  //   });
});

// describe("Fundamental Tests 2", () => {
//   it("should pass", () => {
//     expect(true).to.equal(true);
//   });
//   it("Accordion with more than 50 characters", () => {
//     cy.visit("http://localhost:3000/examples");
//     cy.get("[data-cy=accordion-item]").each(($el) => {
//       cy.wrap($el)
//         .find("[data-cy=accordion-summary]")
//         .invoke("text")
//         .should("have.length.greaterThan", 20);
//       cy.wrap($el)
//         .find("[data-cy=accordion-details]")
//         .invoke("text")
//         .should("have.length.greaterThan", 100);
//     });
//   });
// });
