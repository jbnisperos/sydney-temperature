export class pageObject{

  
    clickChooseFile(option){
        cy.get('#csv-upload').click()
    }

    fileUploadOne(option){
        const fileName = 'sydney-temperature.csv'
        cy.fixture(fileName).then(fileContent => {
            cy.get('[type="file"]').attachFile({fileContent, fileName, mimType: 'application/csv'})
        })
        
    }

    fileUploadTwo(option){
        const fileName = 'sydney-temperature(1).csv'
        cy.fixture(fileName).then(fileContent => {
            cy.get('[type="file"]').attachFile({fileContent, fileName, mimType: 'application/csv'})
        })
        
    }

    fileUploadThree(option){
        const fileName = 'sydney-temperature(2).csv'
        cy.fixture(fileName).then(fileContent => {
            cy.get('[type="file"]').attachFile({fileContent, fileName, mimType: 'application/csv'})
        })
        
    }

    clickSubmit(option){
        cy.get('#button-upload-csv').click()
    }
}

export const temperatureSpread = new pageObject()