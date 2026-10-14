import { useEffect, useState } from "react";
import useScheme from "../../hooks/useScheme";
import { Link } from "react-router-dom";
import LoginPage from "../auth/LoginPage";
import RegisterPage from "../auth/RegisterPage";

function HomePage() {
  const { schemes, getSchemes } = useScheme();

  const [openForm, setOpenForm] = useState(false);
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);

  const user = localStorage.getItem("user");

  const handleOpenLoginForm = () => {
    setOpenForm(true);
    setLoginForm(true);
    setRegisterForm(false);
  };

  const handleOpenRegisterForm = () => {
    setOpenForm(true);
    setLoginForm(false);
    setRegisterForm(true);
  };

  useEffect(() => {
    getSchemes();
  }, []);

  return (
    <div>
      <section className="container py-5">
        <div className="row align-items-center py-4">
          <div className="col-lg-7">
            <span className="badge bg-primary-subtle text-primary mb-3">
              Certification App
            </span>

            <h1 className="display-4 fw-bold mb-3">
              Welcome to Certification App
            </h1>

            <p className="lead text-secondary mb-4">
              Temukan skema sertifikasi yang sesuai dengan kompetensi Anda.
              Tingkatkan kemampuan dan buktikan keahlian Anda melalui
              sertifikasi yang tepat.
            </p>

            {user ? (
              <></>
            ) : (
              <a href="#join" className="btn btn-primary btn-lg me-2">
                Mulai Bergabung
              </a>
            )}

            <a href="#schemes" className="btn btn-outline-primary btn-lg">
              Jelajahi Skema
            </a>
          </div>

          <div className="col-lg-5 mt-4 mt-lg-0">
            <div className="bg-primary text-white rounded-4 p-5 text-center">
              <i className="bi bi-patch-check display-1" />

              <h3 className="fw-bold mt-3">Build Your Competency</h3>

              <p className="mb-0">
                Satu langkah lebih dekat menuju pengakuan kompetensi.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="schemes" className="bg-body-tertiary py-5">
        <div className="container">
          <div className="text-center mb-4">
            <h2 className="fw-bold">Skema Sertifikasi</h2>
            <p className="text-secondary">
              Temukan bidang sertifikasi yang sesuai dengan minat Anda.
            </p>
          </div>

          <div className="row g-4">
            {schemes.slice(0, 3).map((scheme) => (
              <div className="col-md-6 col-lg-4">
                <div className="card border-0 shadow-sm h-100">
                  <div className="card-body p-4">
                    <div className="d-flex justify-content-between mb-3">
                      <i className="bi bi-code-slash fs-1 text-primary" />
                      <span className="badge bg-primary-subtle text-primary">
                        {scheme.scheme_code}
                      </span>
                    </div>

                    <h5 className="fw-bold">{scheme.scheme_name}</h5>

                    <p className="text-secondary">{scheme.description}</p>

                    <p className="small text-secondary mb-0">
                      {scheme.candidate_count} peserta
                    </p>
                  </div>

                  <div className="card-footer bg-white border-0 p-4 pt-0">
                    <Link
                      to={`/scheme/${scheme.id}`}
                      className="btn btn-outline-primary w-100"
                    >
                      Detail Skema
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-4">
            <Link to="/scheme" className="btn btn-primary">
              Lihat Semua Skema
              <i className="bi bi-arrow-right ms-2" />
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="text-center mb-5">
          <h2 className="fw-bold">Tentang Certification App</h2>

          <p className="text-secondary mx-auto" style={{ maxWidth: 650 }}>
            Platform untuk membantu peserta mengenali skema sertifikasi dan
            mengakses informasi yang dibutuhkan dalam proses pengembangan
            kompetensi.
          </p>
        </div>

        <div className="row g-4">
          <div className="col-md-6">
            <div className="border rounded-4 p-4 h-100">
              <i className="bi bi-eye fs-2 text-primary" />

              <h4 className="fw-bold mt-3">Visi</h4>

              <p className="text-secondary mb-0">
                Mendukung terbentuknya individu yang kompeten, profesional, dan
                siap menghadapi kebutuhan dunia kerja melalui pengembangan serta
                pengakuan kompetensi.
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="border rounded-4 p-4 h-100">
              <i className="bi bi-bullseye fs-2 text-primary" />

              <h4 className="fw-bold mt-3">Misi</h4>

              <p className="text-secondary mb-0">
                Menyediakan informasi skema sertifikasi secara jelas,
                mempermudah peserta mengenali pilihan sertifikasi, dan mendukung
                proses pendaftaran yang terstruktur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {user ? (
        <></>
      ) : (
        <section id="join" className="bg-primary text-white py-5">
          <div className="container">
            <div className="row align-items-center g-4">
              <div className="col-lg-6">
                <h2 className="fw-bold">Siap Membuktikan Kompetensimu?</h2>

                <p className="mb-0 opacity-75">
                  Bergabung dan temukan skema sertifikasi yang sesuai dengan
                  kemampuan serta tujuan profesionalmu.
                </p>
              </div>

              <div className="col-lg-6">
                <div className="bg-white text-dark rounded-4 p-4">
                  <h4 className="fw-bold mb-2">Mulai Sekarang</h4>

                  <p className="text-secondary">
                    Buat akun atau masuk akun untuk memulai perjalanan
                    sertifikasimu.
                  </p>

                  {loginForm && <LoginPage />}

                  {registerForm && <RegisterPage />}

                  {openForm ? (
                    <></>
                  ) : (
                    <button
                      onClick={() => handleOpenRegisterForm()}
                      className="btn btn-primary w-100"
                    >
                      Daftar atau Masuk Sekarang
                    </button>
                  )}

                  {loginForm && (
                    <p className="text-center text-secondary small mt-3 mb-0">
                      Belum punya akun?{" "}
                      <button
                        onClick={() => handleOpenRegisterForm()}
                        className="btn text-primary"
                      >
                        Register di sini
                      </button>
                    </p>
                  )}

                  {registerForm && (
                    <p className="text-center text-secondary small mt-3 mb-0">
                      Sudah punya akun?{" "}
                      <button
                        onClick={() => handleOpenLoginForm()}
                        className="btn text-primary"
                      >
                        Login di sini
                      </button>
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default HomePage;
