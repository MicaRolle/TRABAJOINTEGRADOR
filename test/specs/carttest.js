const LoginPage = require('../pageobjets/login.page');
const InventoryPage = require('../pageobjets/inventory.page');
const HeaderPage = require('../pageobjets/hearder.page');

describe('Testing: CART PAGE', () => {
    beforeAll('Login user', () => { 
        LoginPage.open();
        LoginPage.login('standard_user','secret_sauce');
    });

    describe('Simulation add one product', () => {
        it('Add one product', () => {
            InventoryPage.jacketAdd.click();
            HeaderPage.cartbtn.click();
            expect(InventoryPage.inventoryItemName).toBeDisplayed();
        });
        it('Verify price', () => {
            expect(InventoryPage.inventoryItemPrice).toHaveTextContaining('49.99');
        });
        it('Verify description',() => {
            expect(InventoryPage.inventoryItemDesc).toHaveTextContaining('It\'s not every day that you come across a midweight quarter-zip fleece jacket');
        });
        it('Remove product', () => {
            InventoryPage.jacketDelete.click();
            expect(InventoryPage.inventoryItemName).not.toBeDisplayed();
        });
    });
});