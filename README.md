# 🚀 Saurabh Yadav - Portfolio Website

A modern, responsive, high-performance developer portfolio built for **Saurabh Yadav**, featuring dark/light theme support, glassmorphism design, interactive SVG project mockups, case study modal popups, custom lerp cursor, and instant contact form validation.

Modeled after [Akshay Yadav's Portfolio Format](https://portfolio-henna-six-o20qob8rzx.vercel.app) and customized with **Saurabh Yadav's Resume**.

---

## 🌟 Key Features

- **🎨 Modern Dark & Light Mode**: Fluid theme toggle saved in `localStorage` with ambient glow backgrounds and SVG grid overlay.
- **📱 Fully Responsive**: Optimized for Mobile, Tablet, Desktop, and 4K displays.
- **⚡ Case Study Modals**: Deep-dive architecture popups for SyncParty, FoodCare, and AI Interview Coach.
- **🛠 Tech Stack Badges**: Organized categories covering Java, MERN (MongoDB, Express, React, Node), Socket.IO, GeoJSON, JWT, SQL, and CS Core.
- **📄 Interactive Resume View**: Embedded printable resume (`assets/resume.html`) with print/PDF support.
- **📬 Interactive Contact Form**: Real-time validation and submission feedback.
- **🚀 100% Ready to Deploy**: Pre-configured for Vercel, Netlify, or GitHub Pages.

---

## 📂 Project Structure

```text
saurabh-yadav-portfolio/
├── index.html                   # Main single-page application structure
├── style.css                    # Design system, CSS variables, glassmorphism, responsive styles
├── script.js                     # Lucide icons, custom cursor, theme switcher, modal dialogs & form handling
├── vercel.json                  # Vercel deployment configuration
├── package.json                 # Project manifest & npm scripts
├── assets/
│   ├── syncparty_mockup.svg      # SVG graphic showcase for SyncParty project
│   ├── foodcare_mockup.svg       # SVG graphic showcase for FoodCare project
│   ├── ai_interview_coach_mockup.svg # SVG graphic showcase for AI Interview Coach
│   └── resume.html               # Printable single-page resume matching original PDF
└── README.md                    # Project documentation & deployment guide
```

---

## 💻 How to Run Locally

You can serve this static site using any local HTTP server:

### Option 1: Using `npx serve`
```bash
npx serve .
```

### Option 2: Using Python Simple Server
```bash
python -m http.server 3000
```
Then open `http://localhost:3000` in your web browser.

---

## ☁️ How to Deploy to Vercel (Ready to Deploy!)

### Method 1: Using Vercel CLI (Recommended)
1. Install Vercel CLI (if not already installed):
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command inside the project directory:
   ```bash
   vercel
   ```
3. Press `Enter` to accept defaults. Your portfolio will be live in seconds!

### Method 2: Deploy via GitHub & Vercel Dashboard
1. Push this directory to your GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin https://github.com/YOUR_USERNAME/saurabh-yadav-portfolio.git
   git push -u origin main
   ```
2. Go to [Vercel Dashboard](https://vercel.com/new).
3. Import your GitHub repository and click **Deploy**. Vercel will automatically detect `index.html` and deploy it instantly!

---

## 👤 Author

**Saurabh Yadav**  
Computer Science Undergraduate & Full-Stack Software Engineer  
- 📧 Email: saurabhyadav082005@gmail.com  
- 📞 Phone: +91-8052680534  
- 🎓 Institution: IMS Engineering College, Ghaziabad, UP  
- 🌐 GitHub: [saurabhyadav082005](https://github.com/saurabhyadav082005)
