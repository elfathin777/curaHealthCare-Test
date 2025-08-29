import loginPage from "../support/pageObjects/loginPage";

describe('Cura Health Care Automtaion Test for Login Case', () => {

  beforeEach(() => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/');
  })

  afterEach(() => {
    cy.wait(2000);
  })

  afterEach(function () {
        if (this.currentTest.state === 'passed') {
            cy.screenshot(`success-${this.currentTest.title}`, { capture: 'fullPage' });
        }
    });

  it('TC.Log.001 - user login with valid username and valid password', () => {
    loginPage.login('John Doe', 'ThisIsNotAPassword');
    cy.get('h2').should('contain', 'Make Appointment');
  })

  it('TC.Log.002 - user failed to login by entering an invalid username and invalid password.', () => {
    loginPage.login('John Do', 'ThisIsPassword');
    cy.get('p').should('contain', 'Login failed! Please ensure the username and password are valid.');
  })

  it('TC.Log.003 - user failed to login by entering an invalid username and a valid password.', () => {
    loginPage.login('John Do', 'ThisIsNotAPassword');
    cy.get('p').should('contain', 'Login failed! Please ensure the username and password are valid.');
  })

  it('TC.Log.004 - The user failed to log in by entering a valid username and an invalid password.', () => {
    loginPage.login('John Doe', 'ThisIsPassword');
    cy.get('p').should('contain', 'Login failed! Please ensure the username and password are valid.');
  })

  it('TC.Log.005 - User failed to login by entering an username with username letters and a valid password.', () => {
    loginPage.login('JOHN DOE', 'ThisIsNotAPassword');
    cy.get('p').should('contain', 'Login failed! Please ensure the username and password are valid.');
  })

  it('TC.Log.006 - user failed to log in by entering a valid username and a valid password with lowercase letters.', () => {
    loginPage.login('John Doe', 'thisisnotapassword');
    cy.get('p').should('contain', 'Login failed! Please ensure the username and password are valid.');
  })

  it('TC.Log.007 - user failed to login by leaving username and password field empty.', () => {
    loginPage.login('{selectall}{del}', '{selectall}{del}');
    cy.get('p').should('contain', 'Login failed! Please ensure the username and password are valid.');
  })

  it('TC.Log.008 - user failed to login by leaving username field empty and input valid password ', () => {
    loginPage.login('{selectall}{del}', 'ThisIsNotAPassword');
    cy.get('p').should('contain', 'Login failed! Please ensure the username and password are valid.');
  })

   it('TC.Log.009 - user failed to login by entering a valid username and leaving password field empty.', () => {
    loginPage.login('John Doe', '{selectall}{del}');
    cy.get('p').should('contain', 'Login failed! Please ensure the username and password are valid.');
  })
})