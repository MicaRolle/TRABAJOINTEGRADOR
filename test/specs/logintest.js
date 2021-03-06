const LoginPage = require('../pageobjets/login.page');

describe ('Testin login page', () => {
    beforeAll('Open Sauce Demo page', () => {
        browser.url('https://www.saucedemo.com/');
    });

    describe ('Test Username', () => {
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });
        it('Using a undefined username', ()=> {
            LoginPage.setNameInput(undefined);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorUserInput).toBeDisplayed();
            expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
            browser.pause(1500);
        });
        it('Using a empty username', ()=> {
            browser.refresh();
            LoginPage.setNameInput('');
            LoginPage.loginBtn.click();
            expect(LoginPage.errorUserInput).toBeDisplayed();
            expect(LoginPage.errorMessage).toHaveText('Epic sadface: Username is required');
            browser.pause(1500);
        });
        it('Using a wrong username', ()=> {
            browser.refresh();
            LoginPage.setNameInput('Mica');
            LoginPage.loginBtn.click();
            expect(LoginPage.errorUserInput).toBeDisplayed();
            expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
            browser.pause(1500);
        });
        it('Using a correct username', ()=> {
            browser.refresh();
            LoginPage.setNameInput('standard_user');
            LoginPage.loginBtn.click();
            expect(LoginPage.errorUserInput).toBeDisplayed();
            expect(LoginPage.errorMessage).toHaveText('Epic sadface: Password is required');
            browser.pause(1500);
        });
    });
    describe ('Test Password', () => {
        beforeAll("Refresh browser", () => {
            browser.refresh();
        });
        it('Using a correct username and invalid password', ()=> {
            browser.refresh();
            LoginPage.setNameInput('standard_user');
            LoginPage.setPassword('Micaela')
            LoginPage.loginBtn.click();
            expect(LoginPage.errorUserInput).toBeDisplayed();
            expect(LoginPage.errorMessage).
            toHaveText('Epic sadface: Username and password do not match any user in this service');
            browser.pause(1500);
        });
        it('Using an undefined password', () => {        
            browser.refresh();                           
            LoginPage.setPassword(undefined);
            LoginPage.loginBtn.click();
            expect(LoginPage.errorUserInput).toBeDisplayed();
            expect(LoginPage.errorMessage)
            .toHaveText("Epic sadface: Username is required");
        });
        it('Using an empty password', () => {        
            browser.refresh();                           
            LoginPage.setPassword();
            LoginPage.loginBtn.click();
            expect(LoginPage.errorUserInput).toBeDisplayed();
            expect(LoginPage.errorMessage)
            .toHaveText("Epic sadface: Username is required");
        });
        it('Using a empty username and empty password', ()=> {
            browser.refresh();
            LoginPage.setNameInput('');
            LoginPage.setPassword('')
            LoginPage.loginBtn.click();
            expect(LoginPage.errorUserInput).toBeDisplayed();
            expect(LoginPage.errorMessage).
            toHaveText('Epic sadface: Username is required');
            browser.pause(1500);
        });
        it('Using a correct username and a valid password', ()=> {
            browser.refresh();
            LoginPage.setNameInput('standard_user');
            LoginPage.setPassword('secret_sauce')
            LoginPage.loginBtn.click();
            expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
            browser.pause(1500);
        });             
    });
});  