# Investigatr Dashboard  
[![aadildevexplorer/Investigatr](https://img.shields.io/badge/github-repo-blue?logo=github)](https://github.com/aadildevexplorer/investigatr)

## 🔍 Description  
Investigatr Dashboard is a web-based analytics dashboard built using React + Vite.  
It parses CSV data files and displays interactive charts and cards to visualise key metrics in a clean, modern interface.

## ✨ Features  
- 📊 Interactive line chart using Recharts  
- 🧾 Dynamic CSV parsing via PapaParse  
- 🖥️ Modern React + Vite setup  
- 🎨 Styled with Tailwind CSS  
- 🔍 Search bar, filter options and action buttons  
- 📈 Real-time rendering from `data.csv` & `card.csv`

## 🛠 Tech Stack  
- React 18  
- Vite  
- Tailwind CSS  
- Recharts  
- PapaParse  
- Lucide React Icons  

## 📁 Project Structure  
├── public
│ ├── card.csv
│ ├── data.csv
│ └── vite.svg
├── src
│ ├── App.jsx
│ ├── Components
│ │ └── Dashboard.jsx
│ ├── assets
│ ├── index.css
│ └── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── vercel.json

## 🚀 Installation & Setup  
```bash
# Clone the repo  
git clone https://github.com/aadildevexplorer/investigatr.git  
cd investigatr  

# Install dependencies  
npm install  

# Run the development server  
npm run dev

Visit
https://investigatr.vercel.app/ in your browser after starting.

🧭 How It Works
1. Dashboard.jsx component uses PapaParse to load CSV files (data.csv, card.csv) from the public folder.
2. The parsed data is then formatted and fed into Recharts components (line chart) and card components for display.
3. Tailwind CSS handles styling; React manages state via hooks; Vite provides fast dev server & bundling.

🧑‍💻 Author
GitHub Profile - aadildevexplorer
