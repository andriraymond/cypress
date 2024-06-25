const { readExcelData } = require("../../support/readExcel");
const { chunkArray } = require("../../support/utils");

describe("Employee Registration Form Functional Tests in demoqa", () => {
  beforeEach("can access employee data page demoqa", () => {
    const demoqaURL = "https://demoqa.com/webtables";
    cy.visit(demoqaURL),100000; // Visit the form web tables
    cy.wait(2000);

    Cypress.on("uncaught:exception", (err, runnable) => {
      // Handling uncaught exceptions defineLocale error
      return false;
    });
  });

  it.only("fails - unable to register employee data with all columns empty", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear();
    cy.get("#lastName").clear();
    cy.get("#userEmail").clear();
    cy.get("#age").clear();
    cy.get("#salary").clear();
    cy.get("#department").clear();
    cy.get("#submit").click();
  });

  it("fails - unable to register employee data with empty first name fields", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear();
    cy.get("#lastName").clear().type('last name');
    cy.get("#userEmail").clear().type('user@yopmail.com');
    cy.get("#age").clear().type('25');
    cy.get("#salary").clear().type('5000000');
    cy.get("#department").clear().type('Insurance');
    cy.get("#submit").click();
  });

  it("fails - unable to register employee data with empty last name fields", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear().type('first name');
    cy.get("#lastName").clear();
    cy.get("#userEmail").clear().type("user@yopmail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to register employee data with invalid email format", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear().type('first name');
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to register employee data with empty age fields", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear().type('first name');
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear();
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to register employee data with invalid age format", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear().type('first name');
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type('age');
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to register employee data with empty salary fields", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear();
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to register employee data with invalid salary format", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type('salary');
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to register employee data with empty department fields", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type('5000000');
    cy.get("#department").clear();
    cy.get("#submit").click();
  });

  it("passed - can to register employee data with valid data", () => {
    cy.get("#addNewRecordButton").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type('5000000');
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  // it("pass - can add employee data to the registration form with valid data", () => {
  //   for (let i = 0; i < 10; i++) {
  //     cy.get("#addNewRecordButton").click();
  //     cy.get("#firstName").clear().type("sugeng");
  //     cy.get("#lastName").clear().type("ngantuk");
  //     cy.get("#userEmail").clear().type("sugeng@yopmail.com");
  //     cy.get("#age").clear().type("25");
  //     cy.get("#salary").clear().type("5000000");
  //     cy.get("#department").clear().type("testing");
  //     cy.get("#submit").click();
  //   }
  // });
});


describe("Edit Employee Data Functional Tests in demoqa", () => {
  beforeEach("can access employee data page demoqa", () => {
    const demoqaURL = "https://demoqa.com/webtables";
    cy.visit(demoqaURL), 100000; // Visit the form web tables
    cy.wait(2000);

    Cypress.on("uncaught:exception", (err, runnable) => {
      // Handling uncaught exceptions defineLocale error
      return false;
    });
  });

  it("fails - unable to edit employee data with all columns empty", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear();
    cy.get("#lastName").clear();
    cy.get("#userEmail").clear();
    cy.get("#age").clear();
    cy.get("#salary").clear();
    cy.get("#department").clear();
    cy.get("#submit").click();
  });

  it("fails - unable to edit employee data with empty first name fields", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear();
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@yopmail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to edit employee data with empty last name fields", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear();
    cy.get("#userEmail").clear().type("user@yopmail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to edit employee data with invalid email format", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to edit employee data with empty age fields", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear();
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to edit employee data with invalid age format", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("age");
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to edit employee data with empty salary fields", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear();
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to edit employee data with invalid salary format", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type("salary");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });

  it("fails - unable to edit employee data with empty department fields", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear();
    cy.get("#submit").click();
  });

  it("passed - can to edit employee data with valid data", () => {
    cy.get("#edit-record-1").click();
    cy.get("#firstName").clear().type("first name");
    cy.get("#lastName").clear().type("last name");
    cy.get("#userEmail").clear().type("user@mail.com");
    cy.get("#age").clear().type("25");
    cy.get("#salary").clear().type("5000000");
    cy.get("#department").clear().type("Insurance");
    cy.get("#submit").click();
  });
});