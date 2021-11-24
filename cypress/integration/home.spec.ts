describe("RWT Home", function () {
  beforeEach(function () {
    cy.visit("/")
  })

  it("displays the header", function () {
    cy.getBySel("header").should("exist")
  })
})

export {}
