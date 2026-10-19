# Iglesia Cristiana KABOD — React

This is the React + Vite conversion of the original Kabod website. It keeps your original images, colors, schedule, address and contact information.

## Run on your Mac

1. Install Node.js (LTS) from https://nodejs.org/ if you have not already.
2. Unzip `kabod-react.zip`.
3. Open the extracted **kabod-react** folder in Visual Studio Code (File → Open Folder).
4. In VS Code choose Terminal → New Terminal.
5. Run `npm install` (first time only).
6. Run `npm run dev`.
7. Open the local URL printed in the terminal (normally http://127.0.0.1:5173/).

**Important:** Do not use the old Live Server extension for this React project; Vite runs the project instead. Do not open `index.html` directly in Finder.

Stop the development server by pressing Control + C in the terminal. After editing, save files and the browser updates automatically.

## Where to edit

- `src/siteData.js`: ministry name, pastor, phone, email, service times, address
- `src/components/Hero.jsx`: welcome message and first section
- `src/components/Header.jsx`: navigation menu, including mobile menu
- `src/components/Giving.jsx`: donations placeholder (not connected to payments)
- `src/components/`: each other individual section
- `src/styles.css`: website colors, spacing and visual styles
- `public/assets/`: original Kabod logo and background image
- `src/App.jsx`: order of sections on the page

## Publish later

Run `npm run build` to generate a `dist/` folder containing the finished static website. You can deploy that output to a compatible static hosting provider. Configure the correct domain and HTTPS.

## Donation security

This project does **not** collect payments and does **not** store card data. The donations area is intentionally labeled as coming soon. When ready, connect a trusted payment provider through a hosted checkout or verified donation link. Keep secret API keys off the frontend and enable two-factor authentication on hosting and payment accounts.
