// Use modules for utility functions
import _ from "lodash";

// URL Environtment
const Xdemo = "https://xdemo.assetlogistik.id";
const RC = "https://rc.azlogistik.id/";
const Live = "https://muatmuat.com/";

// const Xdemo = "example.com"

describe("1. check dealer and karoseri", () => {
  // it('1. dealer', () => {
  //   // change viewport or view scale preview cypress automation
  //   cy.viewport(1336, 780)

  //   // To open url
  //   cy.visit(Live)

  //   Cypress.on('uncaught:exception', (err, runnable) => {
  //     // handling uncaught:exception defineLocale error

  //     return false
  //   })

  //   // Click Dealer Card
  //   cy.get('[href="https://muatmuat.com/traffic/redirect_buyer?force=dealer-karoseri&kategoriID=40&subKategoriID=23"] > .card-border').click();
  //   cy.wait(1000);

  //   cy.get('#form-pencarian').type('Surabaya{enter}')
  //   cy.wait(1000)

  //   // opsi penjual hanya terverifikasi
  //   cy.get('.checkmark-box').click()
  //   cy.wait(1000)

  //   // click button  terapkan
  //   cy.get('#buttonApplyFilter').click()
  //   cy.wait(1000)

  //   // click reset
  //   cy.get('#buttonCancelFilter').click()

  //   cy.get('[data-page="asc"][data-field="Created"]').click()
  //   cy.wait(2000)

  //   cy.get('[data-page="desc"]').click()
  //   cy.wait(2000)

  //   // to click card ads to detail
  //   cy.get('[data-id="6399"] > .card-body > .body-image-fill-product > img').click()

  //   // to verify element is exist
  //   cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').should('exist')

  //   // to get detail map and close map pop up
  //   cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click()
  //   cy.wait(2000)
  //   cy.get('#modalMapBuyer > .modal-dialog > .modal-content > #closeDiumumkan > span > img').click()

  //   // click contact button
  //   cy.get('#buttonHubungi').click()
  //   cy.wait(2000)
  //   cy.get('#BtnClosePopUpAlertLogin')

  // })

  it("2. katalog-dealer", () => {
    // change viewport or view scale preview cypress automation
    cy.viewport(1336, 780);

    // To open url
    cy.visit(Live);

    Cypress.on("uncaught:exception", (err, runnable) => {
      // handling uncaught:exception defineLocale error

      return false;
    });

    cy.get(
      '[href="https://muatmuat.com/traffic/redirect_buyer?force=dealer-karoseri&kategoriID=40&subKategoriID=23"] >.card-border'
    ).click(); // Click Dealer Card
    cy.wait(1000);

    cy.get('[data-form="0"] >.card-body').click(); // to click Katalog Produk Dealer

    cy.wait(5000);
    cy.get("#form-pencarian").type("Surabaya{enter}"); // type keyword surabaya in field search
    cy.wait(7000);

    // opsi penjual hanya terverifikasi
    cy.get('[data-form="0"] >.card-body').click();
    cy.wait(5000);

    // Jenis Truk CDD checkbox
    cy.get(
      ':nth-child(15) > [style="margin-top: 3px;"] > :nth-child(1) >.checkbox-container >.checkmark-box'
    ).click();

    // click button  terapkan
    cy.get("#buttonApplyFilter").click();
    // cy.get('#buttonApplyFilter').click()
    cy.wait(1000);

    // click button Sorting - Longest
    cy.get('[data-page="asc"][data-field="Created"]').click();
    cy.wait(3000);

    // click button Sorting - Latest
    cy.get('[data-page="desc"][data-field="Created"]').click();
    cy.wait(3000);

    // click reset filter
    cy.get("#buttonCancelFilter").click();
    cy.wait(7000);

    // click detail ads
    // cy.get('[data-id="6358"] >.header-card-fill-product >.card-img-222-130-container > img').click()
    cy.get(
      '[data-id="6834"] > .header-card-fill-product > .card-img-222-130-container > img'
    ).click();
    cy.wait(7000);

    // verify element map exist

    // cy.get(
    //   '[style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: default; touch-action: pan-x pan-y;"] > [style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]'
    // ).should("exist");
    // cy.get(
    //   '[style="position: absolute; z-index: 0; left: 0px; top: 0px; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; cursor: default; touch-action: pan-x pan-y;"] > [style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]'
    // ).click();
    cy.get(
      ".detail-content-container-right > :nth-child(3) > .detail-title-container > .text-black"
    ).should("exist");
    cy.get("#MapLocationBuyer").should("exist");
    cy.get("#MapLocationBuyer").click();
    cy.get(
      "#modalMapBuyer > .modal-dialog > .modal-content > #closeDiumumkan > span > img"
    ).click();

    cy.wait(5000);
    // cy.find(pinMap).scrollTo('bottom')
  });
});
