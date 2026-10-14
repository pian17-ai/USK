import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  validateForm,
  hasErrors,
  fieldClass,
  templateUserRules,
  type FormErrors,
} from "../../validations";

type TemplateUserForm = {
  full_name: string;
  username: string;
  password: string;
};

function FormUserPage() {
  const [form, setForm] = useState<TemplateUserForm>({
    full_name: "",
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChanges = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(form, templateUserRules);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;
  };

  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Tambah User</h3>

        <p className="text-muted mb-0">Tambahkan pengguna baru</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nama Lengkap</label>

              <input
                name="full_name"
                value={form.full_name}
                onChange={handleChanges}
                type="text"
                className={`form-control ${fieldClass(errors, "full_name")}`}
                placeholder="Masukkan nama lengkap"
              />

              {errors.full_name && (
                <div className="invalid-feedback">{errors.full_name}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Username</label>

              <input
                name="username"
                value={form.username}
                onChange={handleChanges}
                type="text"
                className={`form-control ${fieldClass(errors, "username")}`}
                placeholder="Masukkan username"
              />

              {errors.username && (
                <div className="invalid-feedback">{errors.username}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>

              <input
                name="password"
                value={form.password}
                onChange={handleChanges}
                type="password"
                className={`form-control ${fieldClass(errors, "password")}`}
                placeholder="Masukkan password"
              />

              {errors.password && (
                <div className="invalid-feedback">{errors.password}</div>
              )}
            </div>

            <div className="d-flex gap-2">
              <a href="users.html" className="btn btn-secondary">
                Kembali
              </a>

              <button type="submit" className="btn btn-primary">
                Simpan User
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormUserPage;
