class logoutPage {
    get sidebarBtn(){
        return cy.get('#menu-toggle');
    } 

    get logoutTxt(){
        return cy.get('a').contains('Logout');
    }

    logout(){
        this.sidebarBtn.click();
        this.logoutTxt.click();
    }

}

export default new logoutPage();