import Page from './page';
class LoginPage extends Page {

    get inputUsername() {
        return $('#email');
    }

    get inputPassword() {
        return $('#pass');
    }

    get btnSubmit() {
        return $('#send2');
    }

    get errorMessage(){
        return $('.error-msg');
    }

    get validationEmailError(){
        return $('#advice-required-entry-email');
    }

    get validationPassError(){
        return $('#advice-required-entry-pass');
    }

    url() {
        return super.url('customer/account/login/');
    }

    async login (username, password) {
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();

        if (username.length > 0) await this.inputUsername.setValue(username);
        if (password.length > 0) await this.inputPassword.setValue(password);

        await this.btnSubmit.click();
    }
}

export default new LoginPage();
