describe("1. Login to muatmuat", () => {
  it("passes", () => {
    const Xdemo = "https://xdemo.assetlogistik.id";
    const RC = "https://rc.azlogistik.id/";
    const Live = "https://muatmuat.com/login";

    cy.visit(Live);

    Cypress.on('uncaught:exception', (err, runnable) => {
      // handling uncaught:exception defineLocale error

      return false
    })

    cy.get('#inpEmail').type('000000009')
    cy.get('#inpPassword').type('Qcaz123456')
    cy.wait(2000)
    cy.get('#lblMasuk').click()
  })

  it("passes", () => {
    cy.get('[href="https://muatmuat.com/traffic/redirect_buyer?force=dealer-karoseri&kategoriID=40&subKategoriID=23"] >.card-border').click(); // Click Dealer Card
    cy.wait(1000);
  })
})