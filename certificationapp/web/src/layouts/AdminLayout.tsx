import { Link, Outlet } from "react-router-dom";

function AdminLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-3 col-lg-2 sidebar p-3">
          <div className="brand mb-4">Certification App</div>

          <div className="nav flex-column">
            <Link to={"/"} className="nav-link">
              Dashboard
            </Link>

            <Link to={"/candidate"} className="nav-link">
              Candidate
            </Link>

            <Link to={"/scheme"} className="nav-link">
              Certification Scheme
            </Link>

            <Link to={"/user"} className="nav-link">
              Users
            </Link>
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default AdminLayout;
