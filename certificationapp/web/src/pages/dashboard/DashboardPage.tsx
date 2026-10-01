function DashboardPage() {
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Dashboard</h3>

          <p className="text-muted mb-0">Overview Certification App</p>
        </div>

        <div>
          <span className="fw-semibold">Admin Utama</span>
        </div>
      </div>

      <div className="row g-3 mb-4">
        <div className="col-md-4">
          <div className="card stat-card shadow-sm">
            <div className="card-body">
              <div className="text-muted mb-2">Total Peserta</div>

              <div className="stat-number">120</div>

              <small className="text-muted">Peserta terdaftar</small>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card stat-card shadow-sm">
            <div className="card-body">
              <div className="text-muted mb-2">Certification Scheme</div>

              <div className="stat-number">8</div>

              <small className="text-muted">Scheme tersedia</small>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card stat-card shadow-sm">
            <div className="card-body">
              <div className="text-muted mb-2">Users</div>

              <div className="stat-number">5</div>

              <small className="text-muted">User sistem</small>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-header bg-white py-3">
          <div className="d-flex justify-content-between align-items-center">
            <h5 className="mb-0 fw-bold">Peserta Terbaru</h5>

            <a href="candidates.html" className="btn btn-primary btn-sm">
              Lihat Semua
            </a>
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
                <tr>
                  <td>1</td>
                  <td>CRT-001</td>
                  <td>Budi Santoso</td>
                  <td>budi@gmail.com</td>
                  <td>
                    <span className="badge bg-primary">Web Developer</span>
                  </td>
                </tr>

                <tr>
                  <td>2</td>
                  <td>CRT-002</td>
                  <td>Siti Rahma</td>
                  <td>siti@gmail.com</td>
                  <td>
                    <span className="badge bg-success">Database</span>
                  </td>
                </tr>

                <tr>
                  <td>3</td>
                  <td>CRT-003</td>
                  <td>Andi Pratama</td>
                  <td>andi@gmail.com</td>
                  <td>
                    <span className="badge bg-primary">Web Developer</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPage;
