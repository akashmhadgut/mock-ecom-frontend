 # 🛍️ Mock E-Commerce Cart — Frontend

This is the **frontend** of the **Mock E-Commerce Shopping Cart Application**, developed as part of the **Vibe Commerce Full Stack Internship Assignment**.

The frontend is built using **React** and communicates with the **Node.js / Express backend** through REST APIs.
It fetches products, allows users to manage a cart, and performs a **mock checkout** that generates a receipt.

---

## 🌐 Live Demo

👉 **Frontend:** [https://mock-ecom-frontend.onrender.com](https://mock-ecom-frontend.onrender.com)
👉 **Backend:** [https://mock-ecom-backend-1.onrender.com](https://mock-ecom-backend-1.onrender.com)

---

## 🚀 Tech Stack

| Feature        | Technology                            |
| -------------- | ------------------------------------- |
| UI Library     | React                                 |
| HTTP Client    | Axios                                 |
| Styling        | CSS, Tailwind CSS, Bootstrap          |
| State Handling | React Hooks (`useState`, `useEffect`) |
| API Source     | Fake Store API + Custom Backend API   |
| Deployment     | Render (Frontend + Backend)           |

---

## ✨ Features

✅ Fetch all products from backend (integrated with Fake Store API)
✅ Add products to cart with quantity tracking
✅ Update item quantity in real-time
✅ Remove items from cart
✅ Display total amount dynamically
✅ Checkout modal with Name + Email fields
✅ Generate mock receipt with timestamp
✅ Auto-clear cart after checkout
✅ Fully responsive UI for mobile & desktop

---

## 🧩 Component Overview

| Component       | Description                                                               |
| --------------- | ------------------------------------------------------------------------- |
| `ProductList`   | Displays all available products with “Add to Cart” buttons                |
| `Cart`          | Lists all items added to the cart, with quantity controls and total price |
| `CheckoutModal` | Collects user info and completes checkout                                 |
| `Receipt`       | Displays purchase summary after checkout                                  |
| `Navbar`        | Navigation bar linking to Home and Cart                                   |
| `App.js`        | Main component managing routing and layout                                |

---

## 📁 Folder Structure

```
src/
│
├── api/
│   └── api.js        # Handles base URL and API calls
│
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   ├── Register.jsx
├   |── Register.jsx
│   └── Receipt.js
│
├── App.js
├── index.js
└── styles/
    └── main.css
```

---

## ⚙️ Setup & Run Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/akashmhadgut/mock-ecom-frontend
cd mock-ecom-frontend
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Configure environment variable

Create a `.env` file in the root directory:

```
REACT_APP_API_URL=http://localhost:5000
```

> When deployed, this points to your hosted backend:
> `https://mock-ecom-backend-1.onrender.com`

### 4️⃣ Start the development server

```bash
npm start
```

> App will be live at: `http://localhost:3000`

---

## 🔗 Backend Repository

Backend built using **Node.js + Express + MongoDB**
👉 [https://github.com/akashmhadgut/mock-ecom-backend](https://github.com/akashmhadgut/mock-ecom-backend)

---

## 🧠 How It Works

1. **Fetch Products:**
   The frontend calls `GET /api/products` from the backend to list all products (fetched from Fake Store API or MongoDB).

2. **Cart Operations:**

   * Add to cart → `POST /api/cart`
   * View cart → `GET /api/cart`
   * Remove from cart → `DELETE /api/cart/:id`

3. **Checkout Flow:**
   On checkout, frontend sends user info to `POST /api/checkout`,
   backend returns a **receipt** with purchase details & timestamp.

4. **After Checkout:**
   The cart is cleared and receipt is displayed on-screen.

---

## 🧾 Example Checkout Flow

| Step | Action                           | API                  |
| ---- | -------------------------------- | -------------------- |
| 1️⃣  | User adds product to cart        | `POST /api/cart`     |
| 2️⃣  | User views cart                  | `GET /api/cart`      |
| 3️⃣  | User proceeds to checkout        | `POST /api/checkout` |
| 4️⃣  | Receipt displayed + cart cleared | ✅ Done               |

---

## 🧰 Developer Notes

* The project uses a single mock user for simplicity.
* Axios base URL dynamically picks from `.env`.
* Checkout modal validates input fields before submission.
* UI designed with minimal, modern card layout for clarity.

---

## 🎥 Demo Video

🎬 [https://www.loom.com/share/94e7584b6469423d8f7f34a1264ce7ce](https://www.loom.com/share/94e7584b6469423d8f7f34a1264ce7ce)

---

## 🧑‍💻 Author

**Akash Mhadgut**
Full Stack Developer | Vibe Commerce Internship
📧 [akashmhadgut280@gmail.com](mailto:akashmhadgut280@gmail.com)

---

## 📜 License

This project is created for **educational and evaluation purposes only**.

---
 
