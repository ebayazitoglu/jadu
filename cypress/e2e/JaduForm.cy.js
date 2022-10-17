/// <reference types="Cypress" />
import formPage from '../e2e/pages/QAFormPage'



describe('Smoke /Sanity Test check all pages are loading, ',()=>{
  beforeEach(()=>{
    cy.visit('204')
    formPage.declineCookies().click()
})

  it('Fill the form with only required filds and get a success message', () => {
    cy.url().should('eq', 'https://www.jadu.net/xfp/form/204')
    cy.fixture('formData.json')
    .then(user=>{
    formPage.firstName().type(user.name)
    formPage.lastName().type(user.lastName)
    formPage.email().type(user.email)
    formPage.company().type(user.company)
    //cy.get('.recaptcha-checkbox-spinner').click()
    formPage.nextButton().click()
      //verify the data is correct
    formPage.listItems().first().should('contain',user.name)
    formPage.listItems().eq(1).should('contain',user.lastName)
    formPage.listItems().eq(2).should('contain',user.email)
    formPage.listItems().eq(3).should('contain',user.company)
  
    formPage.submitFormButton().click()
    //get the success message
    formPage.successMessage().should('be.visible')
    
  })
})
it('Cannot create a form successfuly without filling  required fields and get error messages ',()=>{
  formPage.firstName().type('##/##/####?<£%^%6')//special characters
  formPage.lastName().type(' ') //empty space is like not filling anything
  formPage.email().type('abc') //@sign should be validated
  
  formPage.nextButton().click()

  //validate error messages page title
  cy.get('#flash-message-alert-error-0').should('be.visible')
  cy.get('#flash-message-alert-error-0').should('contain','Please check the required details are completed')
  //validate error messages in form
  formPage.formErrorMessages().first().should('contain','Error: this field should only contain alphabetic characters. Please re-enter.')
  formPage.formErrorMessages().eq(1).should('contain','This is a required field')
  formPage.formErrorMessages().eq(2).should('contain','Error: this Email address does not appear to be valid. Please re-enter.')
  
  //fill in the form with javascript injection
  formPage.phone().type('javascript:alert("Hello");')  //check for javascript injection
  formPage.nextButton().click()
  cy.get('h1').should('contain','403 Forbidden')
})
it('Can upload a file and select from dropdown successfuly ',()=>{
  formPage.firstName().type('Jonathan ')
  formPage.lastName().type('Smith')
  formPage.email().type('abc@xyz.com')
  formPage.company().type('Mega Corporation')
  //upload the file
  cy.get('input[type=file]')
     .selectFile('cypress/fixtures/satellite-image-of-globe.jpeg', { force: true })
  cy.get('.dz-remove').should('be.visible') //verify thate thre is a remove file button now which confirms file upload

  //add selection via the dropdown
  formPage.countryOfResidence().select('UK & Ireland')
  formPage.seeMoreOptions().select('Jadu XFP')
  
  formPage.nextButton().click()
  formPage.listItems().eq(4).should('contain','UK & Ireland')  //verify selection 
  formPage.listItems().eq(5).should('contain','Jadu XFP')  //verify selection
  formPage.listItems().eq(6).should('contain','satelliteimageofglobe.jpeg') //verify the file upload again with its name

  formPage.submitFormButton().click()
  formPage.successMessage().should('be.visible')

})
it('Verify postcode finder has property hidden tobe true when a correct postcode is input',()=>{
  formPage.postCode().type('s1pe') //an incorrect postcode
  cy.contains('button','Go').click()
  cy.contains('Please enter a valid postcode').invoke('prop','hidden').should('be.false')

  //A Correct postcode
  formPage.postCode().type('S6 5PE') 
  cy.contains('button','Go').click()
  cy.contains('Please enter a valid postcode').invoke('prop','hidden').should('be.true')
  

})


})
