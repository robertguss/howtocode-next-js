describe("/posts and pagination", () => {
  context("Page 1", () => {
    beforeEach(() => {
      cy.visit("/posts")
    })

    it("renders the correct header", () => {
      cy.getBySel("header-title").contains("Articles")
    })
  })
})
