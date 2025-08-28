class AppointmentPage {
    get facilityDropdown() {
        return cy.get('#combo_facility');
    }
    get checkboxReadmission() {
        return cy.get('#chk_hospotal_readmission');
    }
    get medicareRadio() {
        return cy.get('#radio_program_medicare');
    }
    get medicaidRadio() {
        return cy.get('#radio_program_medicaid');
    }
    get noneRadio() {
        return cy.get('#radio_program_none');
    }
    get dateField() {
        return cy.get('#txt_visit_date');
    }
    get commentField() {
        return cy.get('#txt_comment');
    }
    get bookAppointmentBtn() {
        return cy.get('#btn-book-appointment');
    }
    
    setSelectFacility(facilityName) {
        this.facilityDropdown.select(facilityName);
    }

    setApplyReadmission(shouldApply = true) {
        if (shouldApply) {
            this.checkboxReadmission.check();
        } else {
            this.checkboxReadmission.uncheck();
        }
    }
    setSelectHealthcareProgram(programName) {
        if (programName === 'Medicare') {
            this.medicareRadio.click();
        } else if (programName === 'Medicaid') {
            this.medicaidRadio.click();
        } else if (programName === 'None') {
            this.noneRadio.click();
        }
    }
    setVisitDate(date) {
        this.dateField.type(date);
    }
    setComment(comment) {
        this.commentField.type(comment);
    }
    setBookAppointment() {
        this.bookAppointmentBtn.click();
    }
}

export default new AppointmentPage();