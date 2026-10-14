import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
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
      navigate("/");
      window.location.reload();
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
    <>
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
    </>
  );
}

export default LoginPage;
