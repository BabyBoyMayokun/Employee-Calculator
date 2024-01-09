class employeeCostCalculator
{
    countryPlaceHolder(){
        return cy.get('#mui-2')
    }
    countrySelected(){
        return cy.get('.MuiTypography-root').each(($el, index, $list)=>{
            if($el.text()==='Belgium'){
                cy.wrap($el).click()
            }
        })
    }
    
    selectCurrencyPlaceholder(){
        return cy.get('[data-text="Currency"] .css-1xyvygv')
    }
    
    selectCurrency(){
        return cy.get('.MuiTypography-root').each(($el, index, $list)=>{
            if($el.text()==='USD'){
                cy.wrap($el).click()
            }
        })
    }
    
    amountPlaceholder(){
        return cy.get('[id="mui-7"]')
    }
    
    calculateButton(){
        return cy.get('[type="Submit"]')
    }
    verifyCountry(){
        return cy.get('div.MuiGrid-root h3.MuiTypography-root')
    }

    verifyAmount(){
        return cy.get(':nth-child(2) > .css-1ud6v2c > .css-760wm0 > .MuiBox-root')
    }
    verifyDollarSign(){
        return cy.get('div.MuiBox-root h4.MuiTypography-h4:nth-child(1)').should('contain',"$")
    }
}
export default employeeCostCalculator