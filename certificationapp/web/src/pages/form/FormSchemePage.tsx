function FormSchemePage() {
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Tambah Certification Scheme</h3>

        <p className="text-muted mb-0">Tambahkan scheme sertifikasi baru</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form>
            <div className="mb-3">
              <label className="form-label fw-semibold">Scheme Code</label>

              <input
                type="text"
                className="form-control"
                placeholder="Contoh: WD-002"
              />

              <div className="form-text">
                Kode unik untuk certification scheme.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Scheme Name</label>

              <input
                type="text"
                className="form-control"
                placeholder="Contoh: Web Developer"
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Description</label>

              <textarea
                className="form-control"
                rows={5}
                placeholder="Masukkan deskripsi certification scheme"
              ></textarea>
            </div>

            <div className="d-flex gap-2">
              <a href="schemes.html" className="btn btn-secondary">
                Kembali
              </a>

              <button type="submit" className="btn btn-primary">
                Simpan Scheme
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSchemePage;
