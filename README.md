# 🚗 Car Finder Web App

A beautiful, responsive car listing web application built with **Vite**, **React**, and **TailwindCSS**. It allows users to search, filter, view details, and manage a wishlist of cars — all with smooth dark/light mode support and real-time UI updates.

---

## ✨ Features

- 🔍 **Search & Filter**
  - Filter cars by **brand**, **fuel type**, **seating capacity**, and **price range**.

- 🖼️ **Car Grid View**
  - Display cars in a responsive grid layout with key specs and images.

- ❤️ **Wishlist Support**
  - Add or remove cars from your wishlist (stored in `localStorage`).

- 📄 **Car Detail Modal**
  - Click on any car card to view a modal with detailed information.

- ⚡ **Real-Time UI Updates**
  - Filters and wishlist updates happen instantly without reload.

- 🌙 **Dark Mode Toggle**
  - Switch between light and dark themes.

- 🔁 **Pagination**
  - Show 10 cars per page with page controls in the footer.

- ↕️ **Sort by Price**
  - Sort cars by price (low to high, high to low).

---

## 📁 Project Structure



---

## 🔧 Installation & Setup

1. **Clone the repo**
   ```bash
   git clone https://github.com/pratapravendra/mern-assignment
   cd car-finder

Install Dependencies

npm install

Start the Development Server

npm run dev


📦 Mock API Data
All car data is served from the public/cars.json file. You can edit this to add more cars or adjust existing data.

Each car should have:

json
{
  "id": 1,
  "name": "Hyundai i20",
  "brand": "Hyundai",
  "fuel": "Petrol",
  "seating": 5,
  "price": 750000,
  "image": "/images/i20.jpg"
}


