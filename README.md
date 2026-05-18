# 🛰️ Rapsan Tech — GPS Fleet Management Platform

> **Smart Tracking, Strong Business**  
> A production-ready MERN stack GPS tracking & fleet management website.

---

## 🏗️ Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React.js + Vite |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Routing | React Router DOM v6 |
| Icons | Lucide React |
| Backend | Node.js + Express.js |
| Database | MongoDB + Mongoose |
| HTTP Client | Axios |

---

## 📁 Project Structure

```
gps-fleet-pro/
├── backend/
│   ├── controllers/        # contactController, demoController, blogController
│   ├── models/             # Contact, Demo, Blog, Newsletter schemas
│   ├── routes/             # contact, demo, blog, newsletter API routes
│   ├── middleware/         # (extend: auth, upload, etc.)
│   ├── config/             # (extend: DB config, etc.)
│   ├── utils/              # (extend: email, helpers)
│   ├── server.js           # Express app entry point
│   ├── .env.example        # Copy to .env and fill in values
│   └── package.json
│
├── frontend/
│   ├── public/
│   │   └── favicon.svg     # Rapsan Tech branded favicon
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/     # Navbar, Footer, WhatsAppButton, ScrollToTop, PageHero, RapsanBrand
│   │   │   └── home/       # HeroSection, StatsSection, FeaturesSection, ServicesOverview, etc.
│   │   ├── pages/          # Home, About, Services, VehicleTracking, FleetManagement, etc.
│   │   ├── App.jsx         # All routes
│   │   ├── main.jsx
│   │   └── index.css       # Tailwind + custom CSS utilities
│   ├── index.html          # SEO meta tags
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── package.json            # Root — concurrently runs both servers
```

---

## 🚀 Quick Start (Local Development)

### 1. Install Dependencies

```bash
# From root folder
npm run install-all
```

### 2. Configure Backend Environment

```bash
cd backend
cp .env.example .env
# Edit .env with your MongoDB URI and other settings
```

Your `.env` file:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/rapsan-tech
JWT_SECRET=your_secret_key_change_this
NODE_ENV=development
FRONTEND_URL=http://localhost:5173
```

### 3. Run Development Servers

```bash
# From root — starts both backend (port 5000) and frontend (port 5173)
npm run dev
```

Frontend → http://localhost:5173  
Backend API → http://localhost:5000/api

---

## 🌐 Pages / Routes

| Route | Page |
|-------|------|
| `/` | Home — Full landing page |
| `/about` | About Rapsan Tech |
| `/services` | All Services overview |
| `/vehicle-tracking` | Vehicle Tracking service |
| `/fleet-management` | Fleet Management |
| `/school-bus-tracking` | School Bus Tracking |
| `/employee-tracking` | Employee Tracking |
| `/fuel-monitoring` | Fuel Monitoring |
| `/asset-tracking` | Asset Tracking |
| `/gps-devices` | GPS Device products |
| `/industries` | Industries we serve |
| `/mobile-app` | Mobile app showcase |
| `/contact` | Contact Us |
| `/blog` | Blog listing |
| `/faq` | FAQ accordion |
| `/careers` | Careers page |
| `/testimonials` | Client testimonials |
| `/pricing` | Pricing plans |
| `/demo` | Free demo request |

---

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form |
| GET | `/api/contact` | Get all contacts (admin) |
| POST | `/api/demo` | Request a demo |
| GET | `/api/demo` | Get demo requests (admin) |
| GET | `/api/blog` | Get published blogs |
| GET | `/api/blog/:slug` | Get single blog |
| POST | `/api/blog` | Create blog post |
| POST | `/api/newsletter/subscribe` | Newsletter signup |
| GET | `/api/health` | API health check |

---

## 🏭 Production Deployment

### Frontend (Vercel / Netlify)

```bash
cd frontend
npm run build
# Upload /dist folder to Vercel or Netlify
# Set environment variable: VITE_API_URL=https://your-backend.com
```

### Backend (Railway / Render / VPS)

```bash
cd backend
# Set all .env variables in your hosting dashboard
npm start
```

### MongoDB Atlas (Cloud DB)
1. Create free cluster at mongodb.com/atlas
2. Get connection string
3. Set `MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/rapsan-tech`

---

## 🎨 Brand Identity

| Element | Value |
|---------|-------|
| Company | Rapsan Tech |
| Tagline | Smart Tracking, Strong Business |
| Director | Rahul Sharma |
| Phone | +91 9876543210 |
| Email | info@rapsantech.in |
| Website | www.rapsantech.in |
| Address | 123 Business Street, New Delhi, India |
| Primary Color | `#2563EB` |
| Accent Color | `#06B6D4` |
| Background | `#0F172A` |

---

## 📦 Adding Remaining Pages

Stub files to create in `frontend/src/pages/`:

```bash
# These pages are routed in App.jsx but need their JSX files:
VehicleTracking.jsx
FleetManagement.jsx
SchoolBusTracking.jsx
EmployeeTracking.jsx
FuelMonitoring.jsx
AssetTracking.jsx
GpsDevices.jsx
Industries.jsx
MobileApp.jsx
Blog.jsx
FAQ.jsx
Careers.jsx
Testimonials.jsx
```

Each follows the pattern:
```jsx
import { motion } from 'framer-motion'
import PageHero from '../components/common/PageHero'

export default function PageName() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <PageHero badge="Badge" title="Page Title" highlight="Highlight" subtitle="Description" />
      {/* Your sections here */}
    </motion.div>
  )
}
```

---

## 📞 Support

**Rapsan Tech** — *Smart Tracking, Strong Business*  
📞 +91 9876543210 | 📧 info@rapsantech.in | 🌐 www.rapsantech.in
