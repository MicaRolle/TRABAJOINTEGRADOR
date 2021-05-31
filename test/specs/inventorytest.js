const LoginPage = require('../pageobjets/login.page');
const InventoryPage = require('../pageobjets/inventory.page');
const HeaderPage = require('../pageobjets/header.page');


describe('Testing inventory page', () => {
    beforeEach('Login user', () => {
        LoginPage.open();
        LoginPage.login('standard_user','secret_sauce');
    });

    // SORT MENU
    describe('Sort menu - testing', () => {
        beforeEach('Redirect to inventory', () =>{
            browser.url('https://www.saucedemo.com/inventory.html')
        });
        it('First: name A to Z', () => {
            InventoryPage.sortBtn.click();
            InventoryPage.sortAz.click();
            expect(InventoryPage.inventoryFirstItem).toHaveText('Sauce Labs Backpack');
        });
        it('Second: name Z to A', () => {
            InventoryPage.sortBtn.click();
            InventoryPage.sortZa.click();
            expect(InventoryPage.inventoryFirstItem).toHaveText('Test.allTheThings() T-Shirt (Red)');
        })
        it('Third: Price low to high', () => {
            InventoryPage.sortBtn.click();
            InventoryPage.sortLtH.click();
            expect(InventoryPage.inventoryFirstItem).toHaveText('Sauce Labs Onesie');
        });
        it('Fourth: Price high to low', () => {
            InventoryPage.sortBtn.click();
            InventoryPage.sortHtL.click();
            expect(InventoryPage.inventoryFirstItem).toHaveText('Sauce Labs Fleece Jacket');
        });
    });

    //SHOP

    describe('Shopping cart - Testing', () => {
        it('Adding all products', () => {
            InventoryPage.addAllProducts()
            expect(HeaderPage.shoppingCart).toHaveText('6');
            browser.pause(1500)
        });
           
      
        it('See all producs in the cart', () => {
            HeaderPage.cartbtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        });
        it('Removing all products', () => {
            InventoryPage. removeAllProducts();
            expect(HeaderPage.shoppingCart).not.toBeDisplayed();
            browser.pause(1500);
        });
       
               
        
    });

    // PRODUCT DESCRIPTION
    describe('Testing item description page', () => {

        it('Title redirection to item description - BackPack', () => {
            InventoryPage.bpTitle.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        });
        it('Image redirection to item description - BackPack', () => {
            InventoryPage.bpImg.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=4');
        });
        it('Title redirection to item description - Light', () => {
            InventoryPage.lightTitle.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
        });
        it('Image redirection to item description - Light', () => {
            InventoryPage.lightImg.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=0');
        });
        it('Title redirection to item description - Jacket', () => {
            InventoryPage.jacketTitle.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
        });      

        it('Image redirection to item description - Jacket', () => {
            InventoryPage.jacketImg.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=5');
        });
        it('Title redirection to item description - Onesie T-Shirt', () => {
            InventoryPage.onesieShirtTitle.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
        });        

        it('Image redirection to item description - Onesie T-Shirt', () => {
            InventoryPage.onesieShirtImg.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=2');
        });
        it('Title redirection to item description - Red T-Shirt', () => {
            InventoryPage.redTshirtTitle.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
        });        

        it('Image redirection to item description - Onesie T-Shirt', () => {
            InventoryPage.redTshirtImg.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory-item.html?id=3');
        });        
    });
    //MEDIA
    
    describe('Social Media Icons: Testing', () => {
        it('Twitter redirection', () => {
            InventoryPage.twitter.click();
            browser.switchWindow('https://twitter.com/saucelabs');
            expect(browser).toHaveUrl('https://twitter.com/saucelabs');
        });
        it('Facebook redirection', () => {
            InventoryPage.facebook.click();
            browser.switchWindow('https://www.facebook.com/saucelabs');
            expect(browser).toHaveUrl('https://www.facebook.com/saucelabs');
        });
        it('LinkedIn redireccion', () => {
            expect(InventoryPage.linkedin).toHaveHref('https://www.linkedin.com/company/sauce-labs/');
        });
    });

    //MENU
   
    describe('Hamburger menu Testing', () => {
        beforeEach('Open inventory page', () =>{
            browser.url('https://www.saucedemo.com/inventory.html')
        });
        
        it('Testing all options', () => {
            InventoryPage.bpTitle.click();
            HeaderPage.burgerMenu.click();
            HeaderPage.inventorySidebar.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
        });       
        it('Testing logout option', () => {
            HeaderPage.burgerMenu.click();
            HeaderPage.logoutSidebar.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/');
        });
        it('Testing cross button', () => {
            HeaderPage.burgerMenu.click();
            HeaderPage.crossbtn.click();
            HeaderPage.wrapMenu .waitForDisplayed({reverse: true });
            expect(HeaderPage.wrapMenu ).not.toBeDisplayed();
        });
    });   
    
});