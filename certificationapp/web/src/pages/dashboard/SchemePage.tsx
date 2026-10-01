function SchemePage() {
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Certification Scheme</h3>

          <p className="text-muted mb-0">Kelola scheme sertifikasi</p>
        </div>

        <button className="btn btn-primary">+ Tambah Scheme</button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Scheme Code</th>
                  <th>Scheme Name</th>
                  <th>Deskripsi</th>
                  <th>Jumlah Peserta</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>

                  <td>
                    <span className="badge text-bg-primary"> WD-001 </span>
                  </td>

                  <td>Web Developer</td>

                  <td>Sertifikasi kompetensi pengembangan aplikasi web.</td>

                  <td>45 peserta</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>

                  <td>
                    <span className="badge text-bg-success"> DB-001 </span>
                  </td>

                  <td>Database Administrator</td>

                  <td>Sertifikasi pengelolaan database.</td>

                  <td>30 peserta</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>

                  <td>
                    <span className="badge text-bg-info"> NW-001 </span>
                  </td>

                  <td>Network Administrator</td>

                  <td>Sertifikasi kompetensi administrasi jaringan.</td>

                  <td>25 peserta</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>4</td>

                  <td>
                    <span className="badge text-bg-warning"> CY-001 </span>
                  </td>

                  <td>Cyber Security</td>

                  <td>Sertifikasi keamanan sistem informasi.</td>

                  <td>20 peserta</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
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

export default SchemePage;
