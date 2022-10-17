export class FormPage{

    declineCookies(){
        return cy.get('#hs-eu-decline-button')
    }
    firstName (){
        return cy.get('#q3a3f0360c07a2f193f5d6c3deb4e3eaae30a645e')
    }
    lastName(){
        return cy.get('#qd1739dc6339989544b4f2cb33c5589b732dd64be')
    }
    email() {
        return cy.get('#q1849eab7c39f65c5cda6ad7e4d0b1bb6bf9662cd')
    }
    phone() {
        return cy.get('#q46074f7038380274bd1a01b77e026c98036600e0')
    }
    company(){
        return cy.get('#q03edae0235e3eb19801864a76eb03461edf03534')
    }
    countryOfResidence(){
        return cy.get('#q50349b6cff30a2d2546d383f6107bedcd16e705e')
    }
    seeMoreOptions(){
        return cy.get('#q1bfa2b510de7dfe05d4da6b84bd768694740c685')
    }
    postCode(){
        return cy.get('#qc10e3b757b486718defa7935c538283a364cd8ce_postcode')
    }
    checkBokx(){
        return cy.get('#q8529ada87c8b4289ac45401a7bdf7a961c10fe8f1')
    }
    nextButton(){
        return cy.contains('button','Next')
    }
    fileUploadButton(){
        return cy.get('#q3ef4d8d033d5e0e90bee868dc8d0ee3c69695468')
    }
    listItems(){
        return cy.get('.list--form-summary').find('.list__item-content')
    }
    submitFormButton(){
        return cy.contains('button', 'Submit Form')
    }
    successMessage(){
        return cy.contains('h2','Thanks for completing this form.')
    }
    formErrorMessages(){
        return cy.get('.form__error-message')
    }
    
    
    }
    
    module.exports =new FormPage