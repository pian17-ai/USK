import { Link, useNavigate, useParams } from "react-router-dom";
import useScheme from "../../hooks/useScheme";
import { useEffect } from "react";

function ShowSchemePage() {
  const { id } = useParams();
  const { scheme, getScheme } = useScheme();

  const navigate = useNavigate();

  useEffect(() => {
    getScheme(id!);
  }, []);

  return (
    <div className="container py-4">
      <div className="mb-4">
        <p onClick={() => navigate(-1)} className="text-decoration-none text-secondary">
          Kembali
        </p>
      </div>

      <div className="card border-0 shadow-sm overflow-hidden">
        <div className="bg-primary text-white p-4 p-md-5">
          <div className="d-flex align-items-center  gap-3 mb-3">
            <div
              className="rounded-3 bg-white text-primary
                d-flex align-items-center justify-content-center"
              style={{ width: 64, height: 64, fontSize: 28 }}
            >
              <i className="bi bi-patch-check">{scheme?.scheme_code}</i>
            </div>
            <h2 className="fw-bold mb-1">{scheme?.scheme_name}</h2>
          </div>
        </div>

        <div className="card-body p-4 p-md-5">

          <h5 className="fw-bold mb-3">Deskripsi Skema</h5>
          <p className="text-secondary mb-4">
            {scheme?.description || "Belum ada deskripsi skema."}
          </p>

          <hr className="my-4" />

          <div className="row g-4 mb-4">
            <div className="col-md-6">
              <div className="text-secondary small mb-1">Kode Skema</div>
              <div className="fw-semibold">{scheme?.scheme_code}</div>
            </div>

            <div className="col-md-6">
              <div className="text-secondary small mb-1">Jumlah Peserta</div>
              <div className="fw-semibold">
                <i className="bi bi-people me-2" />
                {scheme?.candidate_count} peserta
              </div>
            </div>
          </div>

          <div className="bg-body-tertiary rounded-3 p-3 mb-4">
            <h6 className="fw-bold">
              Informasi Pendaftaran
            </h6>
            <p className="text-secondary small mb-0">
              Register atau Login untuk mulai mendaftar skema
            </p>
          </div>

          <a href="/" className="btn btn-warning">
              Register atau Login
            </a>
        </div>
      </div>
    </div>
  );
}

export default ShowSchemePage;
