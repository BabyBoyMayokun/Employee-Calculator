/// <reference types = 'Cypress'/>

import employeeCostCalculator from "../pageObject/ECC"

const data = require("./../../fixtures/ECC.json")

describe('Testing Calculator Functionality',()=>{
    it('Testing Each Section',()=>{
    const EmployeeCostCalculator=new employeeCostCalculator 
   
        cy.visit(Cypress.env('url'))
        EmployeeCostCalculator.countryPlaceHolder().type('Bel')
        EmployeeCostCalculator.countrySelected()
        EmployeeCostCalculator.selectCurrencyPlaceholder().type('USD')
        EmployeeCostCalculator.selectCurrency()
        EmployeeCostCalculator.amountPlaceholder().type(30000)
        EmployeeCostCalculator.calculateButton().click()
        EmployeeCostCalculator.verifyCountry().should('contain','Belgium')
        EmployeeCostCalculator.verifyAmount().should('contain',"USD 30,000.00")
        EmployeeCostCalculator.verifyDollarSign()
        
    })
})