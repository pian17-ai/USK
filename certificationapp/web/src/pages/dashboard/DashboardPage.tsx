import { useEffect } from "react";
import useCandidate from "../../hooks/useCandidate";
import useScheme from "../../hooks/useScheme";
import useUser from "../../hooks/useUser";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

function DashboardPage() {
  const { candidates, getCandidates } = useCandidate();
  const { schemes, getSchemes } = useScheme();
  const { users, getUsers } = useUser();
  const { user } = useAuth();

  useEffect(() => {
    (getUsers(), getCandidates(), getSchemes());
  }, []);

  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Dashboard</h3>

          <p className="text-muted mb-0">Overview Certification App</p>
        </div>

        <div>
          <span className="fw-semibold">Hello {user?.full_name}</span>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card stat-card shadow-sm">
            <div className="card-body">
              <div className="text-muted mb-2">Total Peserta</div>

              <div className="stat-number">{candidates.length}</div>

              <small className="text-muted">Peserta terdaftar</small>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card stat-card shadow-sm">
            <div className="card-body">
              <div className="text-muted mb-2">Certification Scheme</div>

              <div className="stat-number">{schemes.length}</div>

              <small className="text-muted">Scheme tersedia</small>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card stat-card shadow-sm">
            <div className="card-body">
              <div className="text-muted mb-2">Users</div>

              <div className="stat-number">{users.length}</div>

              <small className="text-muted">User sistem</small>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold">Peserta Terbaru</h5>

            <Link to={"/candidate"} className="btn btn-primary btn-sm">
              Lihat Semua
            </Link>
          </div>
        </div>

        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>No</th>
                  <th>No. Peserta</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>Scheme</th>
                </tr>
              </thead>

              <tbody>
                {candidates.map((candidate) => (
                  <tr>
                    <td>1</td>
                    <td>{candidate.nik}</td>
                    <td>{candidate.full_name}</td>
                    <td>{candidate.email}</td>
                    <td>
                      <span className="badge bg-primary">
                        {
                          candidate.certification_scheme?.scheme_code || "-"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
