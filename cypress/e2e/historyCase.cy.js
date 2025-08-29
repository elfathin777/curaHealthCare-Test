import loginPage from "../support/pageObjects/loginPage";
import appointmentPage from "../support/pageObjects/appointmentPage";
import historyPage from "../support/pageObjects/historyPage";

describe ('History Page Cura Healtcare', () =>{
    beforeEach(() => {
        cy.visit('https://katalon-demo-cura.herokuapp.com/#appointment'),
        loginPage.login('John Doe', 'ThisIsNotAPassword')
    })

    afterEach(function () {
        // cek kalau testnya PASSED → ambil screenshot
        if (this.currentTest.state === 'passed') {
            cy.screenshot(`success-${this.currentTest.title}`, { capture: 'fullPage' });
        }
        // kalau gagal → biarkan Cypress otomatis simpan video
    });

    it ('TC.Hist.001 - The user successfully views the details of an appointment on the history page.', () => {
        appointmentPage.setSelectFacility('Tokyo CURA Healthcare Center');
        appointmentPage.setApplyReadmission();
        appointmentPage.setSelectHealthcareProgram('Medicaid');
        appointmentPage.setVisitDate('23/08/2026');
        cy.get('body').click(0, 0); 
        appointmentPage.setComment('Routine check-up.');
        appointmentPage.setBookAppointment();
        
        // Verifikasi
        cy.url().should('include', 'appointment.php#summary');
        cy.contains('Appointment Confirmation').should('be.visible');

        historyPage.setSidebarBtn();
        historyPage.setHistoryBtn();
        cy.get('h2').should('contain', 'History');
    })

    it ('TC.Hist.002 - The user views the history page without having any appointments made.', () => {
        historyPage.setSidebarBtn();
        historyPage.setHistoryBtn();
        cy.get('p').should('contain', 'No appointment.');

    })

    it ('TC.Hist.003 - The user successfully views two different appointments, correctly organized in the history page.', () => {
        appointmentPage.setSelectFacility('Tokyo CURA Healthcare Center');
        appointmentPage.setApplyReadmission();
        appointmentPage.setSelectHealthcareProgram('Medicare');
        appointmentPage.setVisitDate('22/08/2026');
        cy.get('body').click(0, 0); 
        appointmentPage.setComment('First Appointment');
        appointmentPage.setBookAppointment()

        historyPage.setHomepageBtn();
        cy.get('#btn-make-appointment').click();


        appointmentPage.setSelectFacility('Seoul CURA Healthcare Center');
        appointmentPage.setApplyReadmission();
        appointmentPage.setSelectHealthcareProgram('Medicare');
        appointmentPage.setVisitDate('22/08/2026');
        cy.get('body').click(0, 0); 
        appointmentPage.setComment('Second Appointment');
        appointmentPage.setBookAppointment()

        historyPage.setSidebarBtn();
        historyPage.setHistoryBtn();

        cy.get(':nth-child(1) > .panel > .panel-body > :nth-child(11) > #comment');
        cy.get(':nth-child(2) > .panel > .panel-body > :nth-child(11) > #comment');

    })
})