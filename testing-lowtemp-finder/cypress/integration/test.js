import { temperatureSpread } from "../support/pageObject"


describe('Open UI', () => {

  beforeEach('open application', () => {
      cy.openHomePage()

  })
  describe('Finding the smallest Sydney temperature spread', () => {
      
    it('Testing temperature spread app with only one lowest value', () => {
        
        temperatureSpread.clickChooseFile()
        temperatureSpread.fileUploadOne()
        temperatureSpread.clickSubmit()
       cy.contains("The Lowest temperature spread this year is in the month of February with temperature spread of: 7 Degrees")
      })

      it('Testing temperature spread app with multiple lowest value', () => {
        
        temperatureSpread.clickChooseFile()
        temperatureSpread.fileUploadTwo()
        temperatureSpread.clickSubmit()
       cy.contains("The Lowest temperature spread this year is in the month of January,February,April with temperature spread of: 7 Degrees")
      })

      it('Testing temperature spread app with letters and empty cells', () => {
        
        temperatureSpread.clickChooseFile()
        temperatureSpread.fileUploadThree()
        temperatureSpread.clickSubmit()
       cy.contains("The Lowest temperature spread this year is in the month of December with temperature spread of: 3.33 Degrees")
      })


    })

})
