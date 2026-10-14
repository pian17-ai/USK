import { useEffect, useState } from "react";
import useScheme from "../../hooks/useScheme";
import { Link, useNavigate } from "react-router-dom";

function SchemePage() {
    const { schemes, getSchemes } = useScheme();
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const filteredSchemes = schemes.filter((scheme) => (
      scheme.scheme_name.toLowerCase().includes(search.toLowerCase()) ||
      scheme.scheme_code.toLowerCase().includes(search.toLowerCase()) ||
      scheme.description.toLowerCase().includes(search.toLowerCase())
    ));

    useEffect(() => {
      getSchemes();
    }, []);

  return (
    <div className="container py-4">
      <div className="mb-4">
        <h2 className="fw-bold mb-1">
          Skema Sertifikasi
        </h2>
        <p className="text-secondary mb-0">
          Lihat daftar skema sertifikasi yang tersedia.
        </p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <div className="d-flex flex-column
            flex-md-row justify-content-between
            align-items-md-center gap-3 mb-4">
            <div>
              <h5 className="fw-bold mb-1">
                Daftar Skema
              </h5>
              <span className="text-secondary small">
                {filteredSchemes.length} skema ditemukan
              </span>
            </div>

            <div className="input-group" style={{ maxWidth: 360 }}>
              <input
                type="text"
                className="form-control"
                placeholder="Cari kode, nama, deskripsi..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                name="search"
              />
            </div>
          </div>
            <div className="row g-3">
              {filteredSchemes.map((scheme) => (
                <div className="col-md-6 col-xl-4" key={scheme.id}>
                  <div className="card h-100 border">
                    <div className="card-body p-4">
                      <div className="d-flex
                        justify-content-between
                        align-items-start mb-3">

                        <span className="badge text-bg-light border">
                          {scheme.scheme_code}
                        </span>
                      </div>

                      <h5 className="fw-bold mb-2">
                        {scheme.scheme_name}
                      </h5>

                      <p className="text-secondary mb-4">
                        {scheme.description || "Tidak ada deskripsi."}
                      </p>

                      <div className="d-flex align-items-center
                        gap-2 text-secondary small mb-2">
                        <i className="bi bi-people" />
                        {scheme.candidate_count} peserta
                      </div>

                      <div className="d-flex align-items-center
                        gap-2 text-secondary small">
                        <i className="bi bi-calendar3" />
                        {scheme.created_at}
                      </div>
                    </div>

                    <div className="card-footer bg-white border-0 p-3 pt-0">
                      <Link
                        to={`/scheme/${scheme.id}`}
                        type="button"
                        className="btn btn-outline-primary w-100"
                      >
                        Detail Skema
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>
    </div>
  );
}

export default SchemePage
