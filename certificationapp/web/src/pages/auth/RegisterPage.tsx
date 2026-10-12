import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { RegisterPayload } from "../../types/auth.type";

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterPayload>({
    full_name: "",
    username: "",
    password: ""
  });

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await register(form);

    navigate("/");
  }

  return (
    <div className="h-full container">
      <div className="container h-full">
        <div className="row justify-content-center align-items-center register-wrapper">
          <div className="col-12">
            <div className="card register-card shadow-sm mx-auto">
              <div className="card-body p-4 p-md-5">
                <div className="text-center mb-4">
                  <h3 className="fw-bold mb-1">Buat Akun</h3>

                  <p className="text-muted mb-0">Daftar ke Certification App</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label fw-semibold">
                      Nama Lengkap
                    </label>

                    <input
                      onChange={handleChanges}
                      value={form.full_name}
                      name="full_name"
                      type="text"
                      id="full_name"
                      className="form-control"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Username</label>

                    <input
                      onChange={handleChanges}
                      value={form.username}
                      name="username"
                      type="text"
                      id="username"
                      className="form-control"
                      placeholder="Masukkan username"
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label fw-semibold">Password</label>

                    <input
                      onChange={handleChanges}
                      value={form.password}
                      name="password"
                      type="password"
                      id="password"
                      className="form-control"
                      placeholder="Masukkan password"
                    />
                  </div>

                  <button type="submit" className="btn btn-dark btn-lg w-100">
                    Register
                  </button>
                </form>

                <div className="text-center mt-4">
                  <span className="text-muted">Sudah punya akun?</span>

                  <Link
                    to={"/login"}
                    className="text-decoration-none fw-semibold"
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
