import { Link, Outlet } from "react-router-dom"

function PublicLayout() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">Certification App</a>

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
              <Link className="nav-link active" to={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/login"}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <section
      className="container text-center d-flex flex-column justify-content-center align-items-center"
      style={{ minHeight: '85vh' }}
    >
      <Outlet />
    </section>
    </>
  )
}

export default PublicLayout