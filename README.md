# Cura Healthcare Service – Automated Testing Project 🧪⚡

Welcome to the **Automated Testing Project** for **Cura Healthcare Service**.
This project leverages **Cypress.io** to deliver **robust, end-to-end testing** of the application’s core features — ensuring a smooth, reliable, and bug-free user experience.

---

## ✨ Project Highlights

* 🚀 **End-to-End Testing**
  Validate critical user flows — from logging in, to booking, and reviewing appointments.

* 📂 **Page Object Model (POM)**
  Clean, reusable, and easy-to-maintain codebase with POM. No more scattered selectors — everything is structured and organized!

* 🛡️ **Comprehensive Coverage**
  Includes **positive cases** (successful flows) and **negative cases** (error handling) to catch bugs and edge cases.

---

## 🛠 Getting Started

### **Prerequisites**

* [Node.js](https://nodejs.org/) & npm installed

### **Installation**

Clone the repository and install dependencies:

```bash
git clone https://github.com/elfathin777/curaHealthCare-Test.git
cd curaHealthCare-Test
npm install
```

---

## ▶️ Running the Tests

### **Interactive Mode (UI)**

Run Cypress Test Runner to debug tests in real-time:

```bash
npx cypress open
```

### **Headless Mode (CI/CD)**

Perfect for automation pipelines:

```bash
npx cypress run
```

---

## 📂 Project Structure

Our test suite is organized into logical groups for maximum clarity:

* **`login.cy.js`** → Covers all login scenarios:
  ✅ Valid login
  ❌ Invalid credentials, empty fields, etc.

* **`appointment.cy.js`** → Ensures booking flow works correctly:
  ✅ Successful booking
  ❌ Invalid inputs (e.g., past date)

* **`history.cy.js`** → Validates appointment history:
  ✅ Booked appointments appear correctly
  ✅ Multiple appointments handled properly
  ❌ Empty state handled gracefully

🔎 Explore the **`cypress/e2e/`** and **`cypress/support/pageObjects/`** folders to see the **POM structure** in action.

---

## 🤝 Contributing

Contributions make this project better! 💡

* Found a bug? Open an issue 🐛
* Have an idea for a new test case? Submit a PR 📌

Let’s collaborate to make this project even more **comprehensive and reliable**.

---

⚡ Built with love using **Cypress.io** 🧪

