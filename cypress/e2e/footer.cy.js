describe("Footer", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("The Free Books link goes to the /books page", () => {
    cy.getBySel("footer").within(() => {
      cy.getBySel("footer-link-free-books").click()
    })

    cy.location("pathname").should("equal", "/books")
  })

  it("The Articles link goes to the /posts page", () => {
    cy.getBySel("footer").within(() => {
      cy.getBySel("footer-link-articles").click()
    })

    cy.location("pathname").should("equal", "/posts")
  })

  it("The Podcast link goes to the /podcasts page", () => {
    cy.getBySel("footer").within(() => {
      cy.getBySel("footer-link-podcast").click()
    })

    cy.location("pathname").should("equal", "/podcast")
  })

  it("The Courses link goes to the /courses page", () => {
    cy.getBySel("footer").within(() => {
      cy.getBySel("footer-link-courses").click()
    })

    cy.location("pathname").should("equal", "/courses")
  })

  it("The Tutorials link goes to the /tutorials page", () => {
    cy.getBySel("footer").within(() => {
      cy.getBySel("footer-link-tutorials").click()
    })

    cy.location("pathname").should("equal", "/tutorials")
  })

  it("The Newsletter link goes to the /newsletter page", () => {
    cy.getBySel("footer").within(() => {
      cy.getBySel("footer-link-newsletter").click()
    })

    cy.location("pathname").should("equal", "/newsletter")
  })
})
