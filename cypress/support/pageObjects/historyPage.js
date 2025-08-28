class historyPage{
    get sidebarBtn(){
        return cy.get('#menu-toggle')
    }

    get historyBtn(){
        return cy.get(':nth-child(4) > a')
    }

    get homepageBtn(){
        return cy.get('.text-center > .btn')
    }

    setSidebarBtn(){
        this.sidebarBtn.click();
    }

    setHistoryBtn(){
        this.historyBtn.click();
    }

    setHomepageBtn(){
        this.homepageBtn.click();
    }

}

export default new historyPage();