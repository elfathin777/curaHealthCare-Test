// deklarasi class loginPage
class loginPage{
    // getter untuk tiap elemen login

    get makeAppointmentButton(){
        return cy.get('#btn-make-appointment');
    }

    get usernameField(){
        return cy.get('#txt-username');
    }

    get passwordField(){
        return cy.get('#txt-password');
    }

    get loginButton(){
        return cy.get('#btn-login')
    }

    // Metode untuk melakukan login
    login (username, password){
        this.makeAppointmentButton.click();
        this.usernameField.type(username);
        this.passwordField.type(password);
        this.loginButton.click();
    }
}

export default new loginPage();