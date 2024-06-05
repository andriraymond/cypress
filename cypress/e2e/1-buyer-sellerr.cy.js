// Use modules for utility functions
import _ from 'lodash'

// URL Environtment
const Xdemo = "https://xdemo.assetlogistik.id";
const RC = "https://rc.azlogistik.id/";
const Live = "https://muatmuat.com/";

describe('1. check dealer and karoseri', () => {
  it('dealer', () => {    
    // change viewport or view scale preview cypress automation
    cy.viewport(1336, 780)

    // To open url 
    cy.visit(Live)

    Cypress.on('uncaught:exception', (err, runnable) => {
      // handling uncaught:exception defineLocale error

      return false
    })

    // Click Dealer Card
    cy.get('[href="https://muatmuat.com/traffic/redirect_buyer?force=dealer-karoseri&kategoriID=40&subKategoriID=23"] > .card-border').click();
    cy.wait(1000);
    
    cy.get('#form-pencarian').type('Surabaya{enter}')
    cy.wait(1000)
    
    // opsi penjual hanya terverifikasi
    cy.get('.checkmark-box').click()
    cy.wait(1000)
    
    // click button  terapkan
    cy.get('#buttonApplyFilter').click()
    cy.wait(1000)

    // click reset 
    cy.get('#buttonCancelFilter').click()

    cy.get('[data-page="asc"][data-field="Created"]').click()
    cy.wait(2000)
    
    cy.get('[data-page="desc"]').click()
    cy.wait(2000)
    
    // to click card ads to detail
    cy.get('[data-id="6399"] > .card-body > .body-image-fill-product > img').click()
    
    // to verify element is exist
    cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').should('exist')
    
    // to get detail map and close map pop up
    cy.get('[style="z-index: 3; position: absolute; height: 100%; width: 100%; padding: 0px; border-width: 0px; margin: 0px; left: 0px; top: 0px; touch-action: pan-x pan-y;"]').click()
    cy.wait(2000)
    cy.get('#modalMapBuyer > .modal-dialog > .modal-content > #closeDiumumkan > span > img').click()

  })

  // it('2. katalog-dealer', () => {    
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

  //   cy.get('[data-form="0"] > .card-body').click()
    
  //   cy.get('#form-pencarian').type('Surabaya{enter}')
  //   cy.wait(1000)
    
  //   // opsi penjual hanya terverifikasi
  //   // cy.get('.checkmark-box').click()
  //   cy.get('[data-form="0"] > .card-body').click()
  //   cy.wait(1000)
    
  //   // click button  terapkan
  //   cy.get('#buttonApplyFilter').click()
  //   cy.wait(1000)

  //   // click reset 
  //   cy.get('#buttonCancelFilter').click()



  // })

  })