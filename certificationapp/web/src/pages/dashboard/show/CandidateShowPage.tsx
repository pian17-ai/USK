import { useEffect } from "react";
import useCandidate from "../../../hooks/useCandidate";
import { useNavigate, useParams } from "react-router-dom";

function CandidateShowPage() {
  const { candidate, getCandidate } = useCandidate();
  const { id } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    getCandidate(id!);
  }, []);
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Detail Peserta</h3>

          <p className="text-muted mb-0">Informasi lengkap peserta</p>
        </div>

        <div className="d-flex gap-2">
          {/* <a href="candidate-edit.html" className="btn btn-warning">
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
              <div className="detail-label">NIK</div>

              <div className="detail-value">{candidate?.nik}</div>

              <div className="detail-label">Nama Lengkap</div>

              <div className="detail-value">{candidate?.full_name}</div>

              <div className="detail-label">Email</div>

              <div className="detail-value">{candidate?.email}</div>

              <div className="detail-label">No Telepon</div>

              <div className="detail-value">081234567890</div>
            </div>

            <div className="col-md-6">
              <div className="detail-label">Tanggal Lahir</div>

              <div className="detail-value">{candidate?.born_date}</div>

              <div className="detail-label">Jenis Kelamin</div>

              <div className="detail-value">{candidate?.gender}</div>

              <div className="detail-label">Certification Scheme</div>

              <div className="detail-value">
                <span className="badge bg-primary">
                  {candidate?.certification_scheme.scheme_code} -{" "}
                  {candidate?.certification_scheme.scheme_name}
                </span>
              </div>

              <div className="detail-label">Alamat</div>

              <div className="detail-value">{candidate?.address}</div>
            </div>
          </div>

          <hr />

          <div className="row">
            <div className="col-md-6">
              <div className="detail-label">Dibuat</div>

              <div className="detail-value">{candidate?.created_at}</div>
            </div>

            <div className="col-md-6">
              <div className="detail-label">Terakhir Diubah</div>

              <div className="detail-value">{candidate?.updated_at}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CandidateShowPage;
