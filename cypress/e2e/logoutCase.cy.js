import loginPage from "../support/pageObjects/loginPage"
import logoutPage from "../support/pageObjects/logoutPage"


describe ("Automation logout", () => {
    beforeEach (() => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/#appointment"),
        loginPage.login('John Doe', 'ThisIsNotAPassword')
    })

    afterEach(function () {
        if (this.currentTest.state === 'passed') {
            cy.screenshot(`success-${this.currentTest.title}`, { capture: 'fullPage' });
        }
    });

    it ("logout dengan automation ", () => {
        logoutPage.logout();

         cy.url().should('eq', 'https://katalon-demo-cura.herokuapp.com/');
        cy.get('h1').should('contain', 'CURA Healthcare Service');
    })



})