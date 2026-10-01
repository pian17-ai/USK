function UserPage() {
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Users</h3>

          <p className="text-muted mb-0">Kelola pengguna sistem</p>
        </div>

        <button className="btn btn-primary">+ Tambah User</button>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Username</th>
                  <th>Password</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1</td>

                  <td>Admin Utama</td>

                  <td>admin</td>

                  <td>********</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>2</td>

                  <td>Budi Santoso</td>

                  <td>budi</td>

                  <td>********</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>3</td>

                  <td>Siti Rahma</td>

                  <td>siti</td>

                  <td>********</td>

                  <td className="text-nowrap">
                    <button className="btn btn-warning btn-sm">Edit</button>

                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </td>
                </tr>

                <tr>
                  <td>4</td>

                  <td>Andi Pratama</td>

                  <td>andi</td>

                  <td>********</td>

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

export default UserPage;
