describe("Podcast", () => {
  beforeEach(() => {
    cy.visit("/podcast")
  })

  it("displays information about the episodes", () => {
    cy.getBySel("podcast-episode-1-description").contains(
      "In this episode, I discuss the reasons and motivations for creating the how to code podcast."
    )
  })

  it("the listen button displays the audio player and the correct episode when clicked", () => {
    cy.getBySel("audio-player").should("not.exist")
    cy.getBySel("podcast-listen-to-episode-1-button").click()
    cy.getBySel("audio-player").should("exist")
  })

  it("the show notes button links to the correct episodes show notes", () => {
    cy.getBySel("episode-1-show-notes-link").click()
    cy.location("pathname").should("equal", "/podcast/1")
    cy.get("h1").contains("1: Why this podcast?")
  })
})
