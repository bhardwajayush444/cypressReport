/// <reference types="cypress" />
import BaseClass from '../../support/BaseClass'
const baseClass=new BaseClass
const ecomLoc=baseClass.eComLoc
describe('Automating ecommerce',function(){
    beforeEach(()=>{
        cy.visit(Cypress.env("ecom_url"))
    })
    it('Filling form in Ecommerce',function(){
        cy.FillEcomForm('Ayush','1996-06-09','xyz@gmail.com','fsdfsdfsd','Female')
        ecomLoc.getSuccessMessage().should('contain.text','The Form has been submitted successfully')
    })

    it('Shopping a mobile',function(){
        ecomLoc.getShopLink().should('be.visible').click()
        cy.AddProducToCart('Samsung')
        cy.AddProducToCart('Nokia')
        cy.get('.nav-link.btn.btn-primary').should('be.visible').click()
    })
    
})