Cypress.Commands.add('HandleRedBusDynamicDropdown',(ExpectedText)=>{

    cy.get('.autoFill li').each((el,index,list)=>{
        if(el.text()==ExpectedText){
            el.click()
        }
    })
})

function selectStartYear(YearName,CalendarLocator){
    cy.get('#rb-'+CalendarLocator+' > table > tbody > tr.rb-monthHeader > td.monthTitle').then((el)=>{
        var k=[]
        k=el.text().split(" ")
        const myYear=k[1]
        if(myYear==YearName){
            cy.log(YearName+' year selected')
            return
        }
        else{
           
            cy.get("#rb-calendar_onward_cal > table > tbody > tr.rb-monthHeader > td.next > button").click()
        }
        selectStartYear(YearName,CalendarLocator)
    })
}
const monthUtil=require('../fixtures/Month.json')

function selectStartMonth(MonthName,CalendarLocator){
    cy.get('#rb-'+CalendarLocator+' > table > tbody > tr.rb-monthHeader > td.monthTitle').then((el)=>{
        const monthIndex=monthUtil[MonthName]
        var k=[]
        k=el.text().split(" ")
        const myMonth=k[0]
        const displayedMonthIndex=(monthUtil[myMonth])
        if(monthIndex==displayedMonthIndex){
            cy.log(myMonth+" month selected")
            return
        }
        else{
            cy.get("#rb-calendar_onward_cal > table > tbody > tr.rb-monthHeader > td.next > button").click()       
        }
        selectStartMonth(MonthName,CalendarLocator)
    
    
        })    
}
function selectStartDay(Day,CalendarLocator){
    cy.get('#rb-'+CalendarLocator+' table tbody tr td').each((el,index,list)=>{
        if(el.text()==Day){
            el.click()
        }
     })
}

Cypress.Commands.add('selectStartDate',(travelDate,TypeofJourney)=>{
    if(TypeofJourney=='Start'){
        let k=[]
        k=travelDate.split('-')
        selectStartYear(k[2],'calendar_onward_cal')
        selectStartMonth(k[1],'calendar_onward_cal')
        selectStartDay(k[0],'calendar_onward_cal')
    }
    else{
        let k=[]
        k=travelDate.split('-')
        selectStartYear(k[2],'calendar_return_cal')
        selectStartMonth(k[1],'calendar_return_cal')
        selectStartDay(k[0],'calendar_return_cal')
    }
})
