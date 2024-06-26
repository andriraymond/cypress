describe("Download and Upload Functional Tests in demoqa", () => {
  beforeEach("can access download upload page demoqa", () => {
    const demoqaURL = "https://demoqa.com/upload-download";
    cy.visit(demoqaURL), 100000; // Visit the form web tables
    cy.wait(2000);

    Cypress.on("uncaught:exception", (err, runnable) => {
      // Handling uncaught exceptions defineLocale error
      return false;
    });
  });

it("pass - can download file", () => {
    cy.get("#downloadButton").click();
    cy.wait(10000);
});

it("pass - can upload file", () => {
  const path = "C:/App/GitHub/cypress/cypress/documents/sampleFile.jpeg";
  cy.get('#uploadFile').selectFile(path);
  cy.wait(10000);
});
});