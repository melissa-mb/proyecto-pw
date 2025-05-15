import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router"
import HomePage from "./pages/HomePage.tsx"
// Import all of Bootstrap’s CSS
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import ProfilePage from "./pages/ProfilePage.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div data-bs-theme="dark" className="min-vh-100">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  </StrictMode>
)
