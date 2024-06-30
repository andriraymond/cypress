import "cypress-file-upload";
const { login } = require("../../support/login");

describe("Login Functional test at taumtaum", () => {
  beforeEach("can access register page taumtaum", () => {
    cy.visit("/login"); // Visit the login page

    Cypress.on("uncaught:exception", (err, runnable) => {
      // Handling uncaught exceptions defineLocale error
      return false;
    });
  });

  it("fails - Login", () => {
    login("testxdemo01@yopmail.com", "Qcaz123456");

    // Check Pop Up Survey
    // cy.get('body').then(($body) => {
    //     if ($body.find(':nth-child(1) > .fi-radio').length > 0 && $body.text().includes('Darimana Anda mengetahui muatmuat?') ) {
    //         cy.get(":nth-child(3) > .fi-radio").click();
    //         cy.get("#lanjutkanSurvey").click();
    //         cy.log('flag 04');
    //     } else {
    //         cy.log('flag 05');
    //     }
    // });

    // Demo Transport Market
    cy.visit(
      "https://xdemo.assetlogistik.id/traffic/redirect_transport_market"
    );

    cy.url().should("include", "/demotransportmarket/dashboardDemo");

    cy.get("#BtnToBF").click();

    cy.get("#ShipperDocOption").click();

    cy.get("#tombolRegisterShipper2").click();

    cy.get("#txtKapasitasShipperBF").type("15");

    cy.get("#btnSendKapasitasShipperBF").click(); // btnSendKapasitasShipperBF;

    cy.get(".register-bf-title-container > .text-black").should("exist");

    // Step 1 Register
    const path = "cypress/documents/sampleFile.jpeg";
    // const path2 = 'C:/App/GitHub/cypress/cypress/documents/sampleFile.jpeg';

    // cy.get('input[type="file"]').attachFile(path);
    // cy.get('input[type="file"]').click().type(path);
    // cy.get("#btnSuratJalan").click().attachFile(path);

    // cy.get('input[type="file"]').should("have.value", path);

    cy.get('input[type="file"]').click().attachFile(path);

    cy.wait(10000);
  });
});
