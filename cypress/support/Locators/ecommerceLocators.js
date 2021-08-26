/// <reference types="cypress" />
class ecommerceLocators{
    getFirstName(){
        return cy.get(".form-group input[name='name']")
    }
    getBirthday(){
        return cy.get("input[name='bday']")
    }
    getEmail(){
        return cy.get("input[name='email']")
    }
    getPassword(){
        return cy.get("#exampleInputPassword1")
    }
    getGender(){
        return cy.get("#exampleFormControlSelect1")
    }
    getCheckbox(){
        return cy.get("#exampleCheck1")
    }
    getButton(){
        return cy.get(".btn")
    }
    getSuccessMessage(){
        return cy.get(".alert.alert-success.alert-dismissible")
    }

    getShopLink(){
        return cy.get("a[href='/angularpractice/shop']")
    }
}
export default ecommerceLocators