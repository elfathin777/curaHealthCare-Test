import loginPage from "../support/pageObjects/loginPage";
import appointmentPage from "../support/pageObjects/appointmentPage";

describe('Automation Test for Make Appointment Case', () => { 

    beforeEach (() => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/#appointment");
        loginPage.login('John Doe', 'ThisIsNotAPassword');
    });

    afterEach(function () {
        if (this.currentTest.state === 'passed') {
            cy.screenshot(`success-${this.currentTest.title}`, { capture: 'fullPage' });
        }
    });

    it('TC.APP.001 - should be able to make an appointment successfully', () => {
        // Menggunakan metode dari objek AppointmentPage
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
    });

    it('TC.APP.002 - should prevent booking without a visit date', () => {
        appointmentPage.setSelectFacility('Seoul CURA Healthcare Center');
        appointmentPage.setSelectHealthcareProgram('Medicare');         
        appointmentPage.setComment('booking without a visit date');
        appointmentPage.setBookAppointment(); 

        cy.url().should('not.include', 'summary');
        cy.get('h2').should('contain', 'Make Appointment');
    });

    it('TC.APP.003 - The user is prevented from booking an appointment with a past date.', () => {
        appointmentPage.setSelectFacility('Seoul CURA Healthcare Center');
        appointmentPage.setSelectHealthcareProgram('Medicaid');
        appointmentPage.setVisitDate('22/08/2020');
        cy.get('body').click(0, 0); 
        appointmentPage.setComment('Case past visit date');
        appointmentPage.setBookAppointment(); 

        cy.get('h2').should('contain', 'Make Appointment');
    });

    it('TC.APP.004 - The user successfully books an appointment without selecting a healthcare program.', () => {
        appointmentPage.setSelectFacility('Tokyo CURA Healthcare Center');
        appointmentPage.setSelectHealthcareProgram('None');
        appointmentPage.setVisitDate('22/08/2026');
        cy.get('body').click(0, 0); 
        appointmentPage.setComment('books an appointment without selecting a healthcare program');
        appointmentPage.setBookAppointment(); 


        cy.url().should('include', 'appointment.php#summary');
        cy.contains('Appointment Confirmation').should('be.visible');
    });

    it('TC.APP.005 - The user successfully books an appointment without applying for hospital readmission.', () => {
        appointmentPage.setSelectFacility('Tokyo CURA Healthcare Center');
        appointmentPage.setApplyReadmission(false);
        appointmentPage.setSelectHealthcareProgram('Medicaid');
        appointmentPage.setVisitDate('22/08/2026');
        cy.get('body').click(0, 0); 
        appointmentPage.setComment('books an appointment without applying for hospital readmission.');
        appointmentPage.setBookAppointment(); 


        cy.url().should('include', 'appointment.php#summary');
        cy.contains('Appointment Confirmation').should('be.visible');
    });

    
});