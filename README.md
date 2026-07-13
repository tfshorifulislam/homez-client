
# 🏡 Homez - Dynamic Real Estate Ecosystem

**Homez** is a modern, full-featured, multi-role Real Estate Platform that connects Buyers, Sellers, and Admins in one seamless ecosystem. Built with performance, scalability, and beautiful UX in mind.

![Homez Banner](https://github.com/user-attachments/assets/34089fb0-0fc9-4340-8e19-873d9dad7854)
## ✨ Live Links

- **🌐 Client (Frontend):** [https://homez-two.vercel.app](https://homez-two.vercel.app)
- **🌐 Backend Server:** [https://homez-server-olive.vercel.app](https://homez-server-olive.vercel.app)

---

## 📸 Screenshots

### Landing Page
![Landing Page](./public/screenshots/home-page.png)

*(Add more screenshots in the `/public/screenshots` folder for Dashboard, Property Listing, Analytics, etc.)*

---

## 🔥 Key Features

- **🔐 Role-Based Dynamic Dashboards** – Instantly switches UI and functionality based on user role (**Admin**, **Seller**, or **Buyer**)
- **📊 Rich Data Analytics** – Interactive charts powered by **Recharts**:
  - Sales trends (Line & Bar)
  - Revenue & Earnings growth (Area)
  - Multi-metric comparison (Composed)
  - Property distribution & Lead pipeline (Pie)
- **📱 Fully Responsive Design** – Pixel-perfect experience across mobile, tablet, and desktop
- **⚡ Hydration-Safe UI** – Beautiful pulse skeleton loaders for smooth client-side rendering
- **🎨 Modern & Clean Aesthetics** – Built with Tailwind CSS and custom components
- **🔄 Real-time Feel** – Fast navigation and dynamic data updates

---

## 🛠️ Tech Stack

| Layer       | Technology                          |
|-------------|-------------------------------------|
| Framework   | Next.js 15 (App Router)            |
| Language    | TypeScript                         |
| Styling     | Tailwind CSS                       |
| Charts      | Recharts                           |
| Authentication | Custom Auth Integration         |
| Deployment  | Vercel                             |
| State       | React Hooks + Context / Zustand    |

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm / yarn / pnpm

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/homez.git
cd homez
npm install
NEXT_PUBLIC_API_URL=https://homez-server-olive.vercel.app
# Add other environment variables as needed
npm run dev

src/
├── app/                 # App Router pages & layouts
├── components/          # Reusable UI components
├── features/            # Role-specific features (admin, seller, buyer)
├── lib/                 # Utilities & API client
├── hooks/               # Custom React hooks
├── types/               # TypeScript interfaces
├── public/
│   └── screenshots/     # Project screenshots

npm run dev      # Start development server
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint

 ContributingContributions are welcome! Feel free to open issues or submit pull requests.Fork the project
Create your feature branch (git checkout -b feature/amazing-feature)
Commit your changes (git commit -m 'Add amazing feature')
Push to the branch (git push origin feature/amazing-feature)
Open a Pull Request

