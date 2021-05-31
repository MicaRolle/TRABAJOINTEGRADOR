const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');
const CheckoutPage = require ('../pageobjets/checkout.page');


describe('END TO END - EXAMPLES', () => {
    it('First example', () => {
        LoginPage.open();
        LoginPage.login('standard_user','secret_sauce');
        InventoryPage.addAllProducts.click();
        HeaderPage.cartbtn.click();
        InventoryPage.btnCheckout.click();
        CheckoutPage.FormCheckout('Micaela','Rolle','2000');
        Checkout.btnContinue.click();
        Checkout.btnFinish.click();
        expect(checkoutPage.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        expect(checkoutPage.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        Checkout.backbtn.click();
        HeaderPage.burgerMenu.click();
        HeaderPage.logoutSidebar.click();
    })
    it('Second example', () => {
        LoginPage.open();
        LoginPage.login('standard_user','secret_sauce');
        InventoryPage.jacketAdd.click();
        HeaderPage.cartbtn.click();
        InventoryPage.btnCheckout.click();
        CheckoutPage.Checkout('Micaela','Rolle','2000');
        Checkout.btnContinue.click();
        Checkout.btnFinish.click();
        expect(checkoutPage.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        expect(checkoutPage.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        Checkout.backbtn.click();
        HeaderPage.burgerMenu.click();
        HeaderPage.logoutSidebar.click();
    });
    it('Third example', () => {
        LoginPage.open();
        LoginPage.login('standard_user','secret_sauce');
        InventoryPage.sortBtn.click();
        InventoryPage.sortLtH.click();
        InventoryPage.onesieShirtAdd.click();
        HeaderPage.cartbtn.click();
        InventoryPage.btnCheckout.click();
        CheckoutPage.Checkout('Micaela','Rolle','2000');
        Checkout.btnContinue.click();
        Checkout.btnFinish.click();
        expect(checkoutPage.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        expect(checkoutPage.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        Checkout.backbtn.click();
        HeaderPage.burgerMenu.click();
        HeaderPage.logoutSidebar.click();
    });   
    
});