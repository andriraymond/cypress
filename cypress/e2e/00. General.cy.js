describe("1. Login to muatmuat", () => {
  it("passes", () => {
    const Xdemo = "https://xdemo.assetlogistik.id";
    const RC = "https://rc.azlogistik.id/";
    const Live = "https://muatmuat.com/";

    cy.visit(Live);

    cy.get("#close-banner-promo").then(($btnCloseBanner) => {
      if ($btnCloseBanner.is(":visible")) {
        $btnCloseBanner.click();
        cy.get(
          '.containerSignup > [href="https://xdemo.assetlogistik.id/login"]'
        ).click();

        cy.get("#inpEmail").type("000000009");

        cy.get("#inpPassword").type("Qcaz123456");

        cy.get("#btnMasuk").click();
      }
    });
  });
});
