# 🏠 Nivasa AI — Smart Real-Estate Marketplace

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:7C5CFF,50:00D4FF,100:101522&height=220&section=header&text=Nivasa%20AI&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38" width="100%"/>

### ✦ Search Smarter. Decide Faster. Find Your Nivasa.

**A modern, multilingual and AI-powered real-estate marketplace experience built for buyers, sellers and renters.**

<br/>

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_Website-7C5CFF?style=for-the-badge)](#)
[![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge\&logo=html5\&logoColor=white)](#)
[![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge\&logo=css3\&logoColor=white)](#)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge\&logo=javascript\&logoColor=black)](#)
[![License](https://img.shields.io/badge/License-MIT-success?style=for-the-badge)](LICENSE)

</div>

---

## 🌟 Overview

**Nivasa AI** is a portfolio-grade real-estate marketplace designed to make property discovery easier, smarter and more engaging.

The platform combines:

* 🏡 Property discovery
* 🤖 AI-style property recommendations
* 💰 Home-loan EMI calculations
* 📊 Affordability planning
* 📅 Property visit scheduling
* 🎙️ Voice-powered search
* 🌍 Multilingual interface
* ❤️ Wishlist management
* 🌙 Dark/light themes
* 📱 Responsive modern UI

The project is intentionally built with **zero backend dependencies**, making it completely free to run, customize and deploy.

---

## ✨ Key Features

### 🏠 Smart Property Marketplace

Browse beautiful property cards with:

* Property type
* Location
* Price
* Bedrooms
* Bathrooms
* Area
* Buy/Rent status
* AI match percentage
* Detailed property view

---

### 🤖 Nivasa AI

The built-in AI-style assistant helps users with common real-estate questions.

Example:

```text
"What can I afford with ₹60,000 EMI?"
```

```text
"Show me properties in Pune"
```

```text
"What rental properties are available?"
```

The current version uses **local JavaScript logic**, meaning:

> 🔐 No API key
> 💸 No paid AI service
> ⚡ No backend
> 🚀 Works immediately

The architecture can later be connected to a real AI API.

---

## 🧠 AI Property Matching

Users can describe their requirements naturally:

```text
2 BHK near Pune under 1 Cr
```

Nivasa analyzes the request and returns a suitable property from the available listings.

Example:

```text
✦ 94% AI Match

Skyline Villa
Pune

₹2.35 Cr
4 BHK
2,850 sq.ft
```

---

## 💰 EMI Calculator

A complete home-loan calculator lets users experiment with:

* Property price
* Down payment
* Interest rate
* Loan duration
* Monthly EMI
* Total interest
* Total loan amount

### Formula

```text
EMI = P × r × (1+r)^n
     -------------------
       (1+r)^n - 1
```

Where:

```text
P = Principal loan amount
r = Monthly interest rate
n = Number of monthly payments
```

---

## 📊 Affordability Calculator

Users can enter their approximate monthly budget and receive a quick estimated property budget.

This gives users a simple starting point before exploring properties.

---

## 📅 Property Visit Calendar

Nivasa includes a built-in calendar for planning property visits.

Users can:

* Select dates
* Add property visit reminders
* View scheduled events
* Delete events
* Navigate between months

Events are stored using:

```text
LocalStorage
```

No account or database is required.

---

## 🎙️ Voice Search

Nivasa supports browser-based voice search using the **Web Speech API**.

Users can simply speak a search query instead of typing.

Example:

> 🎙️ "Show me apartments in Pune"

Supported browsers may include:

* Google Chrome
* Microsoft Edge
* Chromium-based browsers

---

## 🌍 Multilingual Experience

The interface includes language options for:

| Language       |        |
| -------------- | ------ |
| 🇬🇧 English   | EN     |
| 🇮🇳 Hindi     | हिंदी  |
| 🇮🇳 Marathi   | मराठी  |
| 🇮🇳 Malayalam | മലയാളം |
| 🇮🇳 Tamil     | தமிழ்  |

The project architecture can be extended to translate the entire application and property database.

---

## ❤️ Wishlist

Users can save properties using the heart button.

Favorites are stored locally using:

```javascript
localStorage
```

So the saved properties remain available after refreshing the page.

---

## 🌙 Dark & Light Mode

Nivasa includes a modern theme switcher.

### Dark Mode

Designed for:

* Night browsing
* Modern aesthetic
* Reduced visual distraction

### Light Mode

Designed for:

* Daytime browsing
* Clean professional appearance
* Better bright-environment visibility

The selected theme is remembered locally.

---

## 🎨 UI & UX

The interface focuses heavily on modern product design.

### Design elements

* Glassmorphism
* Gradient accents
* Floating cards
* Animated hero section
* Hover interactions
* Smooth scrolling
* Reveal animations
* Responsive layouts
* Modern typography
* Interactive modals
* Micro-interactions
* Mobile-first behavior

---

## 📱 Responsive Design

Nivasa is designed to work across:

```text
📱 Mobile
📱 Tablet
💻 Laptop
🖥️ Desktop
```

The layout automatically adapts to different screen sizes.

---

## 🛠️ Tech Stack

| Technology     | Purpose                              |
| -------------- | ------------------------------------ |
| HTML5          | Application structure                |
| CSS3           | UI, animations and responsive design |
| JavaScript     | Application logic                    |
| Web Speech API | Voice search                         |
| LocalStorage   | Wishlist, theme and calendar data    |
| Unsplash       | Demo property imagery                |

No framework is required.

---

## 📂 Project Structure

```text
NivasaAI/
│
├── index.html
│
├── styles.css
│
├── app.js
│
├── README.md
│
├── LICENSE
│
├── .gitignore
│
└── .nojekyll
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/ParthGadge2025/NivasaAI.git
```

### 2. Open the project

```bash
cd NivasaAI
```

### 3. Run

Simply open:

```text
index.html
```

Or use **VS Code + Live Server**.

No installation is required.

---

## 🌐 Free Deployment

Nivasa can be deployed completely free using:

* GitHub Pages
* Netlify
* Vercel
* Cloudflare Pages

### GitHub Pages

Go to:

```text
Repository
   ↓
Settings
   ↓
Pages
   ↓
Deploy from branch
   ↓
main
   ↓
/root
```

Your website will then be available through your GitHub Pages URL.

---

## 🔐 Privacy-Friendly Architecture

Nivasa does not require:

* ❌ Login
* ❌ Database
* ❌ Paid API
* ❌ Backend server
* ❌ API keys

Local user preferences are stored in the browser.

This makes the project:

**Fast + Free + Easy to deploy + Easy to customize**

---

## 🔮 Future Roadmap

### Phase 1 — Marketplace

* [x] Property discovery
* [x] Search
* [x] Filters
* [x] Property details
* [x] Wishlist

### Phase 2 — Smart Tools

* [x] EMI calculator
* [x] Affordability calculator
* [x] AI-style matching
* [x] AI assistant
* [x] Voice search
* [x] Visit calendar

### Phase 3 — Full Platform

* [ ] Supabase/PostgreSQL backend
* [ ] User authentication
* [ ] Buyer dashboard
* [ ] Seller dashboard
* [ ] Renter dashboard
* [ ] Property listing creation
* [ ] Image uploads
* [ ] Property verification
* [ ] Real-time chat
* [ ] Notifications
* [ ] Map integration
* [ ] Saved searches

### Phase 4 — Advanced AI

* [ ] Real AI property assistant
* [ ] Personalized recommendations
* [ ] Natural-language property search
* [ ] Loan eligibility assistant
* [ ] Property price insights
* [ ] Location recommendation
* [ ] Investment analysis
* [ ] Automated property summaries

---

## ⚠️ Disclaimer

The properties, prices, locations and availability displayed in this project are **demo data** created for development and portfolio purposes.

They should not be considered real property listings, financial advice or actual bank loan offers.

The EMI calculator is intended only for approximate planning.

---

## 👨‍💻 Developer

### Parth Gadge

**B.Tech Computer Science & Engineering**

Interested in:

```text
Full-Stack Development
AI / ML
Data Analytics
Web Development
UI/UX
Software Engineering
```

### Connect

**GitHub**

https://github.com/ParthGadge2025

**LinkedIn**

https://www.linkedin.com/in/parth-gadge-1b8531398

**Portfolio**

https://parthportfolo.netlify.app

---

## ⭐ Support

If you found this project useful:

```text
⭐ Star the repository
🍴 Fork the project
🛠️ Customize it
🚀 Deploy it
```

---

<div align="center">

### 🏠 Nivasa AI

**Search Smarter · Compare Better · Decide Faster**

Made with ❤️ using HTML, CSS & JavaScript

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:101522,50:7C5CFF,100:00D4FF&height=120&section=footer" width="100%"/>

</div>
