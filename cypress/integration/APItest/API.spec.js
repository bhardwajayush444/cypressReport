/// <reference types="cypress" />
describe('Automating API using cypress',function(){
    const baseURL=Cypress.env("api_url")
    const authHeader={"Authorization":"Bearer "+Cypress.env('TOKEN')}
    
    it('Creating user', function(){
        const userData={"name":"Ayush Bhardwaj",
        "gender":"male",
        "email":"sjdksdm"+Math.random()+"@gmail.com",
        "status":"active"}
        cy.request({
            method:'POST',
            url:baseURL+'/users',
            body:userData,
            headers:authHeader
        }).then((response)=>{
            expect(response.status).to.eq(201)
            cy.log(JSON.stringify(response.body))
            Cypress.env('generatedID',response.body.data.id)
        })

    })


    
    it('getting details of created user',function(){
        cy.request({
            method:'GET',
            url:baseURL+"/users/"+Cypress.env('generatedID'),
            headers:authHeader
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    })
    it('Update email of created user',function(){
        const email={"email":"demo"+Math.random()+'@gmail.com'}
        cy.request({
            method:'PUT',
            url:baseURL+"/users/"+Cypress.env('generatedID'),
            headers:authHeader,
            body:email
        }).then((response)=>{
            expect(response.status).to.eq(200)
            cy.log(JSON.stringify(response.body))
        })
    })
})
