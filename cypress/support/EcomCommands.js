
import ecommerceLocators from '../support/Locators/ecommerceLocators'

const ecomLoc=new ecommerceLocators
Cypress.Commands.add('FillEcomForm',(Name,Birthday,Email,Password,Gender,)=>{
    ecomLoc.getFirstName().should('be.visible').type(Name)
    ecomLoc.getBirthday().should('be.visible').type(Birthday)
    ecomLoc.getEmail().should('be.visible').type(Email)
    ecomLoc.getPassword().type(Password)
    ecomLoc.getGender().select(Gender)
    ecomLoc.getCheckbox().check().should('be.checked')
    ecomLoc.getButton().should('be.visible').click()
})