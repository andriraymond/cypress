describe("Register Functional test at taumtaum", () => {
  beforeEach("can access register page taumtaum", () => {
    cy.visit("/register/email"); // Visit the register with Email page

    Cypress.on("uncaught:exception", (err, runnable) => {
      // Handling uncaught exceptions defineLocale error
      return false;
    });
  });

  it("fails - unable to register with all field empty", () => {
    cy.get("#inpUsername").clear();
    cy.get("#inpNomorTelepon").clear();
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear();
    cy.get("#inpKonfirmasiPassword").clear();
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text", "Ada field yang belum terisi");
  });

  it("fails - unable to register with username fields empty", () => {
    cy.get("#inpUsername").clear();
    cy.get("#inpNomorTelepon").clear().type('0011223301');
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear().type('Qatest123456');
    cy.get("#inpKonfirmasiPassword").clear().type('Qatest123456');;
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text", "Ada field yang belum terisi");
  });

  it("fails - cannot register with a username less than 3 characters", () => {
    cy.get("#inpUsername").clear().type('wa');
    cy.get("#inpNomorTelepon").clear().type('0011223301');
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear().type('Qatest123456');
    cy.get("#inpKonfirmasiPassword").clear().type('Qatest123456');;
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text", "Nama lengkap minimal 3 karakter!");
  });

  it("fails - cannot register with invalid Username", () => {
    cy.get("#inpUsername").clear().type('B3g0');
    cy.get("#inpNomorTelepon").clear().type('0011223301');
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear().type('Qatest123456');
    cy.get("#inpKonfirmasiPassword").clear().type('Qatest123456');;
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text", "Nama lengkap tidak valid!");
  });

  it("fails - cannot register with empty No Whatsapp fields", () => {
    cy.get("#inpUsername").clear().type("Sugeng");
    cy.get("#inpNomorTelepon").clear()
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear().type("Qatest123456");
    cy.get("#inpKonfirmasiPassword").clear().type("Qatest123456");
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text", "Ada field yang belum terisi");
  });

  it("fails - unable to register with an invalid No Whatsapp less than 8 digits", () => {
    cy.get("#inpUsername").clear().type("Sugeng");
    cy.get("#inpNomorTelepon").clear().type('0011223');
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear().type("Qatest123456");
    cy.get("#inpKonfirmasiPassword").clear().type("Qatest123456");
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text","No. Whatsapp minimal 8 digit!");
  });

  it("fails - unable to register with No Whatsapp has been registered in the system", () => {
    cy.get("#inpUsername").clear().type("Sugeng");
    cy.get("#inpNomorTelepon").clear().type('000000001');
    cy.get("#inpEmail").clear();
    cy.get("#inpPassword").clear().type("Qatest123456");
    cy.get("#inpKonfirmasiPassword").clear().type("Qatest123456");
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text","No. Whatsapp telah terdaftar!");
  });

  it("fails - unable to register with invalid Email format", () => {
    cy.get("#inpUsername").clear().type("Sugeng");
    cy.get("#inpNomorTelepon").clear().type("0011223301");
    cy.get("#inpEmail").clear().type('wrongyopmail.com');
    cy.get("#inpPassword").clear().type("Qatest123456");
    cy.get("#inpKonfirmasiPassword").clear().type("Qatest123456");
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text","Format email salah!");
  });

  it("fails - unable to register with Email has been registered in the system", () => {
    cy.get("#inpUsername").clear().type("Sugeng");
    cy.get("#inpNomorTelepon").clear().type("0011223301");
    cy.get("#inpEmail").clear().type("andriray@yopmail.com");
    cy.get("#inpPassword").clear().type("Qatest123456");
    cy.get("#inpKonfirmasiPassword").clear().type("Qatest123456");
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text", "Email telah terdaftar!");
  });

  it("fails - unable to register with invalid password less than 8 characters", () => {
    cy.get("#inpUsername").clear().type("Sugeng");
    cy.get("#inpNomorTelepon").clear().type("0011223301");
    cy.get("#inpEmail").clear().type("demo99@yopmail.com");
    cy.get("#inpPassword").clear().type("Qatest1");
    cy.get("#inpKonfirmasiPassword").clear().type("Qatest1");
    cy.get("#btnDaftar").click();
    cy.get("#warningErrorText").should("have.text", "Password minimal terdapat 8 karakter!");
  });

it("fails - unable to register with password confirmation is different from the password", () => {
    cy.get("#inpUsername").clear().type("Sugeng");
    cy.get("#inpNomorTelepon").clear().type("0011223301");
    cy.get("#inpEmail").clear().type("andriray@yopmail.com");
    cy.get("#inpPassword").clear().type("Qatest123456");
    cy.get("#inpKonfirmasiPassword").clear().type("Qatest1234");
    cy.get("#btnDaftar").click();
    cy.get('#passwordNotIdentical > .d-flex > .title-warning').should("have.text", "Password tidak sama!");
  });

it("fails - unable to register with empty password confirmation", () => {
  cy.get("#inpUsername").clear().type("Sugeng");
  cy.get("#inpNomorTelepon").clear().type("0011223301");
  cy.get("#inpEmail").clear().type("andriray@yopmail.com");
  cy.get("#inpPassword").clear().type("Qatest123456");
  cy.get("#inpKonfirmasiPassword").clear();
  cy.get("#btnDaftar").click();
  cy.get("#passwordNotIdentical > .d-flex > .title-warning").should("have.text","Password tidak sama!");
});

it("passed - can register with valid credentials", () => {
  cy.get("#inpUsername").clear().type("Sugeng");
  cy.get("#inpNomorTelepon").clear().type("0011223301");
  cy.get("#inpEmail").clear().type("andriray@yopmail.com");
  cy.get("#inpPassword").clear().type("Qatest123456");
  cy.get("#inpKonfirmasiPassword").clear().type("Qatest123456");
  cy.get("#btnDaftar").click();
});
});
