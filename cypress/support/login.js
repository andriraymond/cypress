function login (email, password) {
    const baseUrl = Cypress.config("baseUrl");
    cy.get("#inpEmail").clear().type(email);
    cy.get("#inpPassword").clear().type(password);
    cy.get("#lblMasuk").click();

    cy.url().should("include", "/dashboard/home");

    // Check banner promo
    cy.get('body').then(($body) => {
    if ($body.find('#close-banner-promo').length > 0) {
        cy.get("#close-banner-promo").click();
        cy.log('flag 01');
    } else {
        cy.get('#modalGallery').then((bodyElement) => {
            if (bodyElement.hasClass('imgModal')) {
                cy.log('flag 02');
            } else {
                cy.log('flag 03');
            }
        });
    }
    });
}

exports.login = login;