# 💼 Victor Bodude – Developer Portfolio

This is the personal developer portfolio of **Victor Bodude**, a fullstack Nigerian software engineer, built using **Next.js 13 App Router**, **Tailwind CSS**, **Framer Motion**, and deployed on **Vercel** with full SEO optimization, responsive design, resume download, GitHub + CI/CD integration, and scalable code structure that highlights projects, bio, experience, and social presence.

## 🛠️ Technologies Used

Next.js 13+ • React 18 • Tailwind CSS 3 • Framer Motion • SVG Icons • Google Fonts (Poppins) • TypeScript • GitHub • Vercel Hosting

## 🚀 Features

Animated rotating intro titles • Responsive mobile-first design • Hero section with social icons • PDF Resume download • Skills and tech stack • Timeline-based experience section • SEO meta tags (title, description, keywords, Twitter card, OG) • Sitemap integration for indexing • Sitemap submitted via Google Search Console • Web-ready, lightweight and fast-loading

## 📁 Folder Structure

`/app` – All routes and layout files • `/components` – Modular, reusable UI components • `/public` – Images, icons, and downloadable resume PDF • `/styles` – Tailwind or global styles if needed • `next.config.js` – Config file for domains/fonts/images • `sitemap.xml` – Static sitemap for search engine indexing

## 🧪 How to Run Locally

1. Clone the repo: `git clone https://github.com/vobzzartt/myportfolio.git`  
2. Navigate into the project folder: `cd myportfolio`  
3. Install dependencies: `npm install`  
4. Start the development server: `npm run dev`  
5. Visit `http://localhost:3000` to view the app live

## 🌍 Deployment

We used **Vercel** for continuous deployment:  
- Connect your GitHub repo to Vercel at [https://vercel.com](https://vercel.com)  
- Every push to `main` branch triggers auto redeploy  
- You can also trigger redeploy manually in your Vercel dashboard  
- Preview URLs and logs are auto-generated

## ⚙️ Customization Guide

To edit hero section (name, bio, social links): open `/components/Hero.tsx`  
To update experience or timeline: edit `/components/Experience.tsx`  
To update or replace resume: upload your `resume.pdf` to `/public/pdf/resume.pdf`  
To change SEO: go to `/app/layout.tsx` and update the `metadata` object (title, description, keywords, etc)  
To change favicon or OG image: update `/public/favicon.ico` and related images  
To change sitemap: edit `/public/sitemap.xml` and re-submit to Search Console

## 📈 SEO Setup

We implemented SEO with Next.js metadata export API in `layout.tsx` including title, description, open graph, Twitter card, and favicon • Submitted sitemap to Google Search Console at `https://victorbodude.name.ng/sitemap.xml` • You can view performance reports in Search Console • Use `robots.txt` if needed for more control

## 🐞 Troubleshooting

If fonts don’t load: try reconnecting to the internet or switch to fallback fonts • If Vercel doesn’t deploy: confirm repo is connected and has latest push • If resume won’t download: check `public/pdf/resume.pdf` is present and linked properly

## 👤 Author

**Victor Bodude** – Fullstack Developer, Cloud & AI Enthusiast, Mentor  
GitHub: [@vobzzartt](https://github.com/vobzzartt) • X/Twitter: [@vobzzartt](https://x.com/vobzzartt) • LinkedIn: [Victor Bodude](https://linkedin.com/in/victorbodude) • Instagram: [@vobzzartt](https://instagram.com/vobzzartt)

## 📄 License

This project is open-source and free to use under the **MIT License** – feel free to fork, improve, and use for personal or professional portfolio purposes with credit.