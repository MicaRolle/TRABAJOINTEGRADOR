class CheckoutPage {
    get title () { return $('.title') }
    get NameInput () { return $('#first-name') }
    get surnameInput () { return $('#last-name') }
    get postalnumberInput () { return $('#postal-code') }
    get continueBtn () { return $('#continue') }
    get finishBtn ()  { return $('#finish') }
    get cancelBtn () { return $('#cancel') }    
    get errorMsj() { return $('.error-message-container') }
    get errorBtn () { return $('.error-button') }
    get errorData () { return $('[data-test="error"]') }
    get complHeader () { return $('.complete-header') }
    get complText () { return $('.complete-text') }
    get backbtn () { return $('#back-to-products') }
    

    FormCheckout (Name,Surname,postalCode) {
        this.NameInput.setValue(Name);
        this.surnameInput.setValue(Surname);
        this.postalnumberInput.setValue(postalCode);
    }

}
module.exports = new CheckoutPage();