import { useState, type ChangeEvent, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import type { LoginPayload } from "../../types/auth.type";
import { loginAPI } from "../../services/authService";
import useAuth from "../../hooks/useAuth";

function LoginPage() {
  const { login } = useAuth();

  const [form, setForm] = useState<LoginPayload>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await loginAPI(form);
    if (res) {
      login(res.data);
      navigate('/');
    }
  };

  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center login-wrapper">
        <div className="col-12">
          <div className="card login-card shadow-sm mx-auto">
            <div className="card-body p-4 p-md-5">
              <div className="text-center mb-4">
                <h3 className="fw-bold mb-1">Certification App</h3>

                <p className="text-muted mb-0">Login ke akun kamu</p>
              </div>

              <form onSubmit={handleSubmit}>
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
                  Login
                </button>
              </form>

              <div className="text-center mt-4">
                <span className="text-muted">Belum punya akun?</span>

                <Link
                  to={"/register"}
                  className="text-decoration-none fw-semibold"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
