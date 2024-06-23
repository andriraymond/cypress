describe("Login Functional test at taumtaum", () => {
  beforeEach("can access register page taumtaum", () => {
    cy.visit("/login"); // Visit the login page

    Cypress.on("uncaught:exception", (err, runnable) => {
      // Handling uncaught exceptions defineLocale error
      return false;
    });
  });

  it("fails - cannot login with empty username and password", () => {
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear();
    cy.get("#btnMasuk").click();
    cy.get("#warningEmail > .d-flex > .title-warning").should("have.text","Email belum terisi");
  });

  it("fails - cannot login with empty username", () => {
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear().type("Qcaz123456");
    cy.get("#btnMasuk").click();
    cy.get("#warningEmail").should("exist");
    cy.get("#warningEmail > .d-flex > .title-warning").should("have.text","Email belum terisi");
  });

  it("fails - cannot login with empty password", () => {
    cy.get("#inpEmail").clear().type("wrong01@yopmail.com");
    cy.get("#inpPassword").clear();
    cy.get("#btnMasuk").click();
    cy.get("#warningEmail > .d-flex > .title-warning").should("have.text","Password belum terisi");
  });

  it("fails - cannot login with wrong username", () => {
    cy.get("#inpEmail").clear().type("wrong01@yopmail.com");
    cy.get("#inpPassword").clear().type("Qcaz123456");
    cy.get("#btnMasuk").click();
    cy.get("#warningEmail > .d-flex > .title-warning").should("have.text","Email/Password yang Anda masukan salah, Silakan coba lagi!");
  });

  it("fails - cannot login with wrong password", () => {
    cy.get("#inpEmail").clear().type("rc01@yopmail.com");
    cy.get("#inpPassword").clear().type("Qcaz1234567");
    cy.get("#btnMasuk").click();
    cy.get("#warningEmail > .d-flex > .title-warning").should("have.text","Email/Password yang Anda masukan salah, Silakan coba lagi!");
  });

  it("passes - can login with valid credentials", () => {
    // cy.get("#inpEmail").clear().type("rc01@yopmail.com");
    cy.get("#inpEmail").clear().type("andriray@yopmail.com"); // xdemo server
    cy.get("#inpPassword").clear().type("Qcaz123456");
    cy.get("#btnMasuk").click();
    cy.url().should("include", "/dashboard"); // Check for presence of '/dashboard' in URL
    cy.get("#close-banner-promo").should("exist"); // Verify that the close banner exists
    cy.get("#close-banner-promo").click();
  });
});
