Cypress.Commands.add('AddProducToCart',(ProductName)=>{
    cy.get('h4.card-title').each((el,index,list)=>{
        if(el.text().includes(ProductName)){
            cy.get('.btn.btn-info').eq(index).click()
        }
    })
})