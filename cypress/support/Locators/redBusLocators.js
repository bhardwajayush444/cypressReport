class redBusLocators{

    getSource(){
        return cy.get('#src')
    }
    getDestination(){
        return cy.get('#dest')
    }
    getReturnCalculator(){
        return cy.get('#return_cal')
    }
    getSearchButton(){
        return cy.get("#search_btn")
    }
}

export default redBusLocators
