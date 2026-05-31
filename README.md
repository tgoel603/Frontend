# Billing & Checkout Dashboard — Frontend Assignment

A pixel-perfect, highly responsive **Billing & Checkout Dashboard** built using **React JS** and the latest **Tailwind CSS**. This project was developed as a part of the Frontend Developer Intern selection process within the stipulated 48-hour timeline.

## 🔗 Project Links
* **GitHub Repository:** [https://github.com/tgoel603/Frontend](https://github.com/tgoel603/Frontend)

---

## 🚀 Features Implemented

* **Pixel-Perfect UI Execution:** Strictly followed the Figma design guidelines, including color codes, component spacing, layout typography, and accurate input element states.
* **Component-Based Architecture:** Broken down into atomic, highly structured, modular, and reusable components.
* **State Management:** Integrated dynamic reactive features such as toggle states for coupon selections (`WELCOME20` vs `ANNUAL50`).
* **Responsive Design:** Fully fluid across mobile, tablet, and desktop viewports using custom Tailwind grid configurations.
* **Modern Tooling:** Built on top of **Vite** for ultra-fast Hot Module Replacement (HMR) and optimized build bundles.

---

## 🛠️ Tech Stack & Extentions Used

### Core Framework & Library
* **React JS** (Functional Components & Hooks)
* **Tailwind CSS** (Utility-first styling approach)
* **Lucide React** (Vector icons matching Figma layout wireframes)

### Recommended VS Code Extensions Used
* **Tailwind CSS IntelliSense** — For accurate design utility utility autocompletions.
* **ES7+ React/Redux/React-Native snippets** — For clean boilerplate generation.
* **Prettier** — For automated code formatting and consistent code spacing.

---

## 📁 Component Folder Structure

The project has been organized clearly using modular clean code principles:

```text
Frontend/
├── public/
│   └── icons.svg
├── src/
│   ├── assets/
│   ├── Navbar.jsx         # Top navigation bar containing search & user profile
│   ├── BillingForm.jsx    # Primary grid-based customer layout form matching Figma data
│   ├── OrderSummary.jsx   # Right checkout container containing wallet/coupon systems
│   ├── App.jsx            # Main app page router and root view configuration
│   ├── main.jsx           # Core entry file initializing DOM mounting points
│   └── index.css          # Main stylesheet declaring design system parameters
├── package.json
└── vite.config.js
