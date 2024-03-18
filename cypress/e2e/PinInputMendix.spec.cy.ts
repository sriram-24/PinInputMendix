describe("PinInputMendix", () => {
    it("changes caption when attribute value is changed", () => {
    cy.visit("http://192.168.240.1:8080/");
   
    // testing input count
    cy.get('.mx-name-pinInputMendix1').find('input').should('have.length', 3);
    cy.get('.mx-name-textBox2').find('input').clear().type('4').blur()
    cy.get('.mx-name-pinInputMendix1').find('input').should('have.length', 4);

    // testing default value is set in input
    const arr = ["1","2","3",""]
    cy.get('.mx-name-textBox1').find('input').type('123').blur();
    cy.get('.mx-name-pinInputMendix1').find('input').should('have.length', 4)
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','value',arr[index])
        
    })

    const arr2 = ["1","2","3","4"]
    cy.get('.mx-name-textBox1').find('input').clear().type('1234').blur();
    cy.get('.mx-name-pinInputMendix1').find('input').should('have.length', 4)
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','value',arr2[index])
        
    })
    cy.get('.modal-body').should('contain.text','complete')
    cy.get('.modal-footer').find('.btn-primary').click() 

    // check clear button
    cy.get('.mx-name-pinInputMendix1').find('.pin-clear-btn').click()
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','value','')
        
    })

    // check placeholder
    cy.get('.mx-name-textBox3').find('input').type('*').blur()
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','placeholder','*')
        
    })

    // check direction
    cy.get('.mx-name-textBox4').find('input').type('rtl').blur()
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','dir','rtl')
        
    })
    // left to right
    cy.get('.mx-name-textBox4').find('input').clear().type('ltr').blur()
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','dir','ltr')
        
    })
    // right to left
    cy.get('.mx-name-textBox4').find('input').clear()
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','dir','ltr')
        
    })

    // clear button label check
    cy.get('.mx-name-textBox5').find('input').clear().type('clear').blur()
    cy.get('.mx-name-pinInputMendix1').find('.pin-clear-btn').should('have.text','clear')
    cy.get('.mx-name-textBox5').find('input').clear().blur()
    cy.get('.mx-name-pinInputMendix1').find('.pin-clear-btn').should('not.have.text','clear')

    //  checking input mask
    cy.get('.mx-name-radioButtons1').find('input[type="radio"][value="true"]').click()
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','type','password')
        
    })
    cy.get('.mx-name-radioButtons1').find('input[type="radio"][value="false"]').click()
    cy.get('.mx-name-pinInputMendix1').find('input').each(($input, index)=>{
        cy.wrap($input).should('have.attr','type','tel')
        
    })
    });
});
