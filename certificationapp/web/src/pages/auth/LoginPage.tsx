import { useState, type ChangeEvent, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import type { LoginPayload } from "../../types/auth.type";
import { loginAPI } from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import {
  validateForm,
  hasErrors,
  fieldClass,
  loginRules,
  type FormErrors,
} from "../../validations";

function LoginPage() {
  const { login } = useAuth();

  const [form, setForm] = useState<LoginPayload>({
    username: "",
    password: "",
  });
  const [error, setError] = useState(false);

  const [errors, setErrors] = useState<FormErrors>({});

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(form, loginRules);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    try {
      const res = await loginAPI(form);
      login(res.data);
      navigate("/");
      window.location.reload();
    } catch (err) {
      setError(true);
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
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
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
            className={`form-control ${fieldClass(errors, "username")}`}
            placeholder="Masukkan username"
          />

          {errors.username && (
            <div className="invalid-feedback">{errors.username}</div>
          )}
        </div>

        <div className="mb-3">
          <label className="form-label fw-semibold">Password</label>

          <input
            onChange={handleChanges}
            value={form.password}
            name="password"
            type="password"
            id="password"
            className={`form-control ${fieldClass(errors, "password")}`}
            placeholder="Masukkan password"
          />

          {errors.password && (
            <div className="invalid-feedback">{errors.password}</div>
          )}
        </div>

        {error && (
          <div className="alert alert-danger">Username atau Password salah</div>
        )}

        <button type="submit" className="btn btn-dark btn-lg w-100">
          Login
        </button>
      </form>
    </>
  );
}

export default LoginPage;
