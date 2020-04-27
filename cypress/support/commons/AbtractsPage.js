/// <reference types="Cypress" />

//     getElementByXpath (element){
//         return cy.xpath(element)
//     }

//     getElementByCss (element){
//         return cy.get(element)
//     }



class AbtractsPage {
    constructor() {
  
      this.random = Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, "")
        .substr(0, 7);
  
      // this.randomEmail = "bi.nguyen+" + this.random + "@reebonz.com";
      // this.password = "123456"
      // this.singaporeCountry = "Singapore"
  
    }
    getElementByXpath = (element) => {
      return cy.xpath(element)
    };
  
    getElementByCss = (element) => {
      return cy.get(element)
    };
  
  
    getElementByXpathAndClick = (element) => {
      if (cy.xpath(element).should('be.visible')) {
        cy.wait(500)
        return cy.xpath(element).click()
      } else {
        return false
      }
      
    };
  
    selectDropdownValueByXpath = (element, value) => {
      return cy.xpath(element).select(value)
    };
  
    getElementByCssAndClick = (element) => {
      if (cy.get(element).should('be.visible')) {
        cy.wait(500)
        cy.get(element).click()
      } else {
        return false
      }
    };
  
    showElement = (element) => {
      return cy.log(element)
    }
  
    checkElementVisibleByXpath = (element) => {
      // if (cy.xpath(element).should('be.visible')) {
      //   return true
      // } else {
      //   return false
      // }
      return cy.xpath(element).should('be.visible')
    }

    checkElementVisibleByCss = (element) => {
      return cy.get(element).should('be.visible')
    }
  
    typeToElementByXpath = (element, value) => {
      return cy.xpath(element).should('be.visible').type(value)
    }
  
    convertToNumber = (value) => {
      value = value.match(/\d\.*/g);
      value = value.join("");
      value = Number(value);
      return value;
    };
  
    hoverElementByXpath = (element) => {
      // return cy.xpath("//div[@id='overlay']").then($input => {
      //   if ($input.is(':hidden')) {
      //     cy.xpath(element).trigger('mouseover')
      //    }
      //   })
      return cy.xpath(element).trigger('mouseover',{force: true})
    }

    hoverElementByCss = (element) => {
      // return cy.xpath("//div[@id='overlay']").then($input => {
      //   if ($input.is(':hidden')) {
      //     cy.xpath(element).trigger('mouseover')
      //    }
      //   })
      cy.get(element).trigger('mouseover',{force: true})
    }
  
    assertTextByXpath = (element,value) => {
      return cy.xpath(element).should('not.have.text', value)
    }
  
    assertUrlContains = (value) => {
      return cy.url({timeout:60000}).should('include',value)
    }
    
    checkElementVisibleAndType =(element, value) => {
      return cy.xpath(element).should('be.visible').then($input => {
        if ($input.is(':visible')) {
          cy.xpath(element).type(value)
         }
        })
    }
  
    checkElementVisibleAndTypeByCss = (element, value) => {
      return cy.get(element,{timeout:5000}).should('be.visible').then($input => {
        if ($input.is(':visible')) {
          cy.get(element).type(value)
         }else{
           cy.log('Dont have element')
         }
        })
    }

    checkElementVisibleAndTypeByCssThenEnter = (element, value) => {
      return cy.get(element,{timeout:5000}).then($input => {
        if ($input.is(':visible')) {
          cy.get(element).type(value).type('{enter}')
         }else{
           cy.log('Dont have element')
         }
        })
    }
  
    //   checkElementIsPresentAndConvertToNumber = async (elementWait) => {
    //     let isVisible = cy.get(elementWait)
  
    //     if (isVisible) {
    //       let result = await elementWait.getText();
    //       let value = 0;
    //       value = await this.convertToNumber(result);
    //       return value;
    //     } else {
    //       let value = 0;
    //       return value;
    //     }
    //   };
  }
  
  
  export default AbtractsPage;
  