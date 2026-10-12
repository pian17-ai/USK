function FormUserPage() {
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Tambah User</h3>

        <p className="text-muted mb-0">Tambahkan pengguna baru</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Lengkap</label>

              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>

              <input
                type="text"
                className="form-control"
                placeholder="Masukkan username"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>

              <input
                type="password"
                className="form-control"
                placeholder="Masukkan password"
              />
            </div>

            <div className="d-flex gap-2">
              <a href="users.html" className="btn btn-secondary">
                Kembali
              </a>

              <button type="submit" className="btn btn-primary">
                Simpan User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormUserPage;
