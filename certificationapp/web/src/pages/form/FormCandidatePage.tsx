function FormCandidatePage() {
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Tambah Peserta</h3>

        <p className="text-muted mb-0">Tambahkan data peserta baru</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nomor Peserta</label>

              <input
                type="text"
                className="form-control"
                placeholder="Contoh: CRT-005"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Lengkap</label>

              <input
                type="text"
                className="form-control"
                placeholder="Masukkan nama lengkap"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>

              <input
                type="email"
                className="form-control"
                placeholder="nama@email.com"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Nomor Telepon</label>

              <input
                type="text"
                className="form-control"
                placeholder="08xxxxxxxxxx"
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Tanggal Lahir</label>

              <input type="date" className="form-control" />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Jenis Kelamin</label>

              <select className="form-select">
                <option selected disabled>
                  Pilih jenis kelamin
                </option>

                <option value="male">Laki-laki</option>

                <option value="female">Perempuan</option>
              </select>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Alamat</label>

              <textarea
                className="form-control"
                rows={4}
                placeholder="Masukkan alamat lengkap"
              ></textarea>
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Certification Scheme
              </label>

              <select className="form-select">
                <option selected disabled>
                  Pilih certification scheme
                </option>

                <option value="1">WD-001 - Web Developer</option>

                <option value="2">DB-001 - Database Administrator</option>

                <option value="3">NW-001 - Network Administrator</option>

                <option value="4">CY-001 - Cyber Security</option>
              </select>
            </div>

            <div className="d-flex gap-2">
              <a href="candidates.html" className="btn btn-secondary">
                Kembali
              </a>

              <button type="submit" className="btn btn-primary">
                Simpan Peserta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCandidatePage;
