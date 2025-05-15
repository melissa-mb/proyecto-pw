import { useState } from "react"
import NavBar from "../components/NavBar"

export default function ProfilePage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: send data to backend
    alert("Information updated!")
    
  }

  return (
    <>
      <NavBar />
      <div className="container d-flex justify-content-center align-items-center vh-100">
        <div className="card p-4 bg-dark text-white" style={{ maxWidth: "500px", width: "100%" }}>
          <div className="text-center mb-4">
            <div
              className="rounded-circle bg-secondary mx-auto"
              style={{
                width: "120px",
                height: "120px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.9rem",
              }}>
              Your Profile
              <br />
              Image
            </div>
          </div>
          <h5 className="text-center mb-3">Edit your profile information:</h5>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label">
                First Name
              </label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={form.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label">
                Last Name
              </label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={form.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label">
                E-mail
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d-flex justify-content-end">
              <button type="submit" className="btn btn-outline-light">
                Edit Information <i className="bi bi-pencil"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
