import { Link, Outlet } from "react-router-dom"

function UserLayout() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>Certification App</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/scheme"}>Skema</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"profile"}>Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section
      style={{ minHeight: '85vh' }}
    >
      <Outlet />
    </section>

    <footer className="container py-4">
      <div className="d-flex flex-column flex-md-row
        justify-content-between align-items-center gap-2">
        <span className="fw-bold">Certification App</span>

        <span className="text-secondary small">
          © 2026 Certification App. All rights reserved.
        </span>
      </div>
    </footer>
    </>
  )
}

export default UserLayout