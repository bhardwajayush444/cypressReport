/// <reference types="cypress" />

import BaseClass from '../../support/BaseClass'
const baseClass=new BaseClass
const redBusLocators=baseClass.redBusLoc


describe('Automating the first ecommerce application',function(){

    beforeEach(()=>{
        cy.visit(Cypress.env('redBus_url'))
    })
    it('Automating red bus',function(){
        
        redBusLocators.getSource().should('be.visible').type('delhi')
        cy.HandleRedBusDynamicDropdown('Kashmiri Gate, Delhi, India')
        redBusLocators.getDestination().should('be.visible').type('rishi')
        cy.HandleRedBusDynamicDropdown('Rishikesh, Uttarakhand, India')
        cy.selectStartDate('28-Aug-2021','Start')
        redBusLocators.getReturnCalculator().click({force:true})
        cy.selectStartDate('30-Aug-2021','Return')
        redBusLocators.getSearchButton().click()
        
    })
   
})