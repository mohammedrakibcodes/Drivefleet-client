# DriveFleet

![Next.js](https://img.shields.io/badge/Next.js-16-black)
![React](https://img.shields.io/badge/React-19-61DAFB)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-06B6D4)
![HeroUI](https://img.shields.io/badge/HeroUI-Latest-7C3AED)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-Latest-FF0055)
![Firebase](https://img.shields.io/badge/Firebase-Authentication-FFCA28)
![JWT](https://img.shields.io/badge/JWT-Secure-black)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-47A248)
![Express.js](https://img.shields.io/badge/Express.js-5-lightgrey)
![Node.js](https://img.shields.io/badge/Node.js-LTS-339933)
![Render](https://img.shields.io/badge/Backend-Render-46E3B7)
![Vercel](https://img.shields.io/badge/Frontend-Vercel-black)


DriveFleet is a modern and responsive car rental platform designed to provide a seamless vehicle booking experience. The application allows users to explore available cars, view detailed vehicle information, securely authenticate, book cars online, manage personal bookings, and maintain their own car listings through an intuitive and user-friendly interface.

---

##  Live Demo

🔗 https://drivefleet-client-blue.vercel.app

---

#  Key Features

## Authentication & User Management

- Secure user registration with email and password
- Login and logout functionality
- Google OAuth authentication
- Persistent user sessions
- Protected routes for authenticated users
- User profile management

## Car Rental Platform

- Browse available rental cars
- Dynamic car details page
- Search cars by name
- Filter cars by category
- Responsive car cards
- Real-time availability status

## Booking System

- Book available vehicles
- Automatic rental cost calculation
- Manage personal bookings
- Cancel bookings
- Booking history for authenticated users

## Car Management

- Add new car listings
- Update existing car information
- Delete owned car listings
- Manage personal vehicle inventory
- Booking count tracking

## User Experience

- Fully responsive design
- Mobile-first layout
- Loading states and skeleton screens
- Custom 404 page
- Toast notifications
- Smooth page transitions
- Modern and clean interface

## Security

- Firebase Authentication
- JWT Authentication with HTTPOnly Cookies
- Protected client and server routes
- Owner-based authorization
- Secure MongoDB data storage

---

#  Technology Stack

## Client

- Next.js
- React
- Tailwind CSS
- HeroUI
- Framer Motion
- React Icons
- Swiper.js
- Sonner

## Server

- Node.js
- Express.js
- MongoDB Atlas
- MongoDB Driver

## Authentication

- Firebase Authentication
- Google OAuth
- JSON Web Token (JWT)
- HTTPOnly Cookies

## Deployment

- Vercel
- Render

---

# 📦 Packages Used

- next
- react
- react-dom
- @heroui/react
- framer-motion
- swiper
- react-icons
- sonner
- firebase
- express
- mongodb
- jsonwebtoken
- cookie-parser
- cors
- dotenv

---

#  Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/mohammedrakibcodes/drivefleet-client.git
```

## 2. Navigate to the Project Directory

```bash
cd drivefleet-client
```

## 3. Install Dependencies

```bash
npm install
```

## 4. Configure Environment Variables

Create a `.env.local` file in the project root and add the following variables:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_API_URL=your_backend_api_url
```

## 5. Start the Development Server

```bash
npm run dev
```

Visit the application:

```text
http://localhost:3000
```

---

#  Project Highlights

- Built using the Next.js App Router architecture
- Integrated Firebase Authentication with Google OAuth
- Secured private APIs using JWT and HTTPOnly Cookies
- Connected with MongoDB Atlas for cloud database management
- Complete car rental and booking management workflow
- Owner-based authorization for car management
- Search and filter functionality for better browsing
- Responsive across mobile, tablet, and desktop devices
- Production-ready deployment on Vercel and Render

---

#  License

This project is developed for educational and portfolio purposes.
