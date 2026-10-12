import { useEffect } from "react";
import useScheme from "../../../hooks/useScheme";
import { useNavigate, useParams } from "react-router-dom";

function SchemeShowPage() {
  const { id } = useParams();
  const { scheme, getScheme } = useScheme();

  const navigate = useNavigate();

  useEffect(() => {
    getScheme(id!);
  }, []);

  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Detail Certification Scheme</h3>

          <p className="text-muted mb-0">Informasi certification scheme</p>
        </div>

        <div className="d-flex gap-2">
          {/* <a href="scheme-edit.html" className="btn btn-warning">
            Edit
          </a> */}

          <button onClick={() => navigate(-1)} className="btn btn-secondary">
            Kembali
          </button>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="detail-label">Scheme Code</div>

              <div className="detail-value">
                <span className="badge text-bg-primary fs-6">{scheme?.scheme_code}</span>
              </div>

              <div className="detail-label">Scheme Name</div>

              <div className="detail-value">{scheme?.scheme_name}</div>
            </div>

            <div className="col-md-6">
              <div className="detail-label">Jumlah Peserta</div>

              <div className="detail-value">{scheme?.candidate_count} peserta</div>

              <div className="detail-label">Dibuat</div>

              <div className="detail-value">{scheme?.created_at}</div>
            </div>
          </div>

          <hr />

          <div>
            <div className="detail-label">Deskripsi</div>

            <div className="detail-value">
              Sertifikasi kompetensi pengembangan aplikasi web yang mencakup
              frontend, backend, database, dan deployment.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SchemeShowPage;
