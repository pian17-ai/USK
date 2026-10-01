function CandidatePage() {
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Data Peserta</h3>

          <p className="text-muted mb-0">Kelola data peserta sertifikasi</p>
        </div>

        <button className="btn btn-primary">+ Tambah Peserta</button>
      </div>

      <div className="card border-0 shadow-sm mb-4">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-md-5">
              <input
                type="text"
                className="form-control"
                placeholder="Cari nama peserta..."
              />
            </div>

            <div className="col-md-4">
              <select className="form-select">
                <option selected>Semua Scheme</option>

                <option>Web Developer</option>

                <option>Database</option>

                <option>Network</option>
              </select>
            </div>

            <div className="col-md-3">
              <button className="btn btn-secondary w-100">Cari</button>
            </div>
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>No</th>
                  <th>No. Peserta</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>No. HP</th>
                  <th>Tanggal Lahir</th>
                  <th>Gender</th>
                  <th>Scheme</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>

                  <td>CRT-001</td>

                  <td>Budi Santoso</td>

                  <td>budi@gmail.com</td>

                  <td>081234567890</td>

                  <td>12 Jan 2008</td>

                  <td>Laki-laki</td>

                  <td>Web Developer</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>

                  <td>CRT-002</td>

                  <td>Siti Rahma</td>

                  <td>siti@gmail.com</td>

                  <td>082345678901</td>

                  <td>20 Mar 2007</td>

                  <td>Perempuan</td>

                  <td>Database</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>

                  <td>CRT-003</td>

                  <td>Andi Pratama</td>

                  <td>andi@gmail.com</td>

                  <td>083456789012</td>

                  <td>5 Jul 2008</td>

                  <td>Laki-laki</td>

                  <td>Web Developer</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>4</td>

                  <td>CRT-004</td>

                  <td>Dinda Putri</td>

                  <td>dinda@gmail.com</td>

                  <td>085678901234</td>

                  <td>18 Nov 2007</td>

                  <td>Perempuan</td>

                  <td>Network</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <nav className="mt-3">
            <ul className="pagination justify-content-end mb-0">
              <li className="page-item disabled">
                <a className="page-link"> Previous </a>
              </li>

              <li className="page-item active">
                <a className="page-link"> 1 </a>
              </li>

              <li className="page-item">
                <a className="page-link"> 2 </a>
              </li>

              <li className="page-item">
                <a className="page-link"> 3 </a>
              </li>

              <li className="page-item">
                <a className="page-link"> Next </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default CandidatePage;
