describe("PinInputMendix", () => {
    it("changes caption when attribute value is changed", () => {
        cy.visit("http://localhost:8080/index.html?profile=Responsive");

        /**
        * Create here your tests, Example:
        * const newAttributeValue = "Test";
        * const badge = ".mx-name-badgeDanger";
        *
        * cy.get(badge).should("not.contain.text", newAttributeValue);
        * cy.get(".mx-name-dataInput").find("input").type(newAttributeValue).type("{enter}");
        * cy.get(badge).should("contain.text", newAttributeValue);
        **/
       cy.get(".pin-input-root").should("contain.html",`<div class="alert alert-danger mx-validation-message" style="padding: 8px; margin: 0px;">Input count should be greater than 0.</div><button class="pin-clear-btn"><span class="mx-icon-lined mx-icon-airplane"></span></button>`)
    });
});
