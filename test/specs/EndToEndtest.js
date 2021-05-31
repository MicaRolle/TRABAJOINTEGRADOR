const LoginPage = require('../pageobjets/login.page');
const InventoryPage = require('../pageobjets/inventory.page');
const HeaderPage = require('../pageobjets/header.page');
const CheckoutPage = require ('../pageobjets/checkout.page');


describe('END TO END - EXAMPLES', () => {
    it('First example', () => {
        LoginPage.open();
        LoginPage.login('standard_user','secret_sauce');
        InventoryPage.addAllProducts()
        HeaderPage.cartbtn.click();
        InventoryPage.btnCheckout.click();
        CheckoutPage.FormCheckout('Micaela','Rolle','2000');
        CheckoutPage.continueBtn.click();
        CheckoutPage.finishBtn.click();
        expect(CheckoutPage.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        expect(CheckoutPage.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        CheckoutPage.backbtn.click();
        HeaderPage.burgerMenu.click();
        HeaderPage.logoutSidebar.click();
    });
    it('Second example', () => {
        LoginPage.open();
        LoginPage.login('standard_user','secret_sauce');
        InventoryPage.jacketAdd.click();
        HeaderPage.cartbtn.click();
        InventoryPage.btnCheckout.click();
        CheckoutPage.FormCheckout('Micaela','Rolle','2000');
        CheckoutPage.continueBtn.click();
        CheckoutPage.finishBtn.click();
        expect(CheckoutPage.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        expect(CheckoutPage.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        CheckoutPage.backbtn.click();
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
        CheckoutPage.FormCheckout('Micaela','Rolle','2000');
        CheckoutPage.continueBtn.click();
        CheckoutPage.finishBtn.click();
        expect(CheckoutPage.completeHeader).toHaveText('THANK YOU FOR YOUR ORDER');
        expect(CheckoutPage.completeText).toHaveText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        CheckoutPage.backbtn.click();
        HeaderPage.burgerMenu.click();
        HeaderPage.logoutSidebar.click();
    });
})