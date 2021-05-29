class LoginPage {

    get nameInput () { return $('#user-name') }
    get passwordInput () { return $('#password') }
    get errorMessage () { return $('.error-message-container') }
    get loginBtn () { return $('#login-button') }
    get errorUserInput () { return $$('.fa-times-circle') } 

    setNameInput(username) {
        this.nameInput.setValue(username);
        this.nameInput.keys("Tab");
    }

    setPassword (password) {
        this.passwordInput.setValue(password);
        this.passwordInput.keys("Tab");
    }
  
    login (username, password) {
        this.setNameInput(username);
        this.setPassword(password);
        this.loginBtn.click();
    }

    open () {
      browser.url('https://www.saucedemo.com/');
    }   
}
module.exports = new LoginPage();