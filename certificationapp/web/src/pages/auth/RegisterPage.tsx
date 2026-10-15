import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { RegisterPayload } from "../../types/auth.type";
import {
  validateForm,
  hasErrors,
  fieldClass,
  registerRules,
  type FormErrors,
} from "../../validations";

function RegisterPage() {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState<RegisterPayload>({
    username: "",
    password: "",
    full_name: "",
    nik: 0,
    email: "",
    phone_number: 0,
    born_date: "",
    gender: "",
    address: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChanges = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(form, registerRules);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    try {
      await register(form);
    } catch (err) {
      console.error(err);
    }

    navigate("/");
    window.location.reload();
  };

  return (
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

      <div className="mb-3">
        <label className="form-label fw-semibold">Nama Lengkap</label>

        <input
          onChange={handleChanges}
          value={form.full_name}
          name="full_name"
          type="text"
          id="full_name"
          className={`form-control ${fieldClass(errors, "full_name")}`}
          placeholder="Masukkan nama lengkap"
        />

        {errors.full_name && (
          <div className="invalid-feedback">{errors.full_name}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">
          Nomor Induk Kependudukan
        </label>

        <input
          onChange={handleChanges}
          value={form.nik}
          name="nik"
          type="text"
          id="nik"
          className={`form-control ${fieldClass(errors, "nik")}`}
          placeholder="Masukkan nik"
        />

        {errors.nik && <div className="invalid-feedback">{errors.nik}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Email</label>

        <input
          onChange={handleChanges}
          value={form.email}
          name="email"
          type="email"
          id="email"
          className={`form-control ${fieldClass(errors, "email")}`}
          placeholder="Masukkan email"
        />

        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Nomor Telepon</label>

        <input
          onChange={handleChanges}
          value={form.phone_number}
          name="phone_number"
          type="text"
          id="phone_number"
          className={`form-control ${fieldClass(errors, "phone_number")}`}
          placeholder="Masukkan no telepon"
        />

        {errors.phone_number && (
          <div className="invalid-feedback">{errors.phone_number}</div>
        )}
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Tanggal Lahir</label>

        <input
          onChange={handleChanges}
          value={form.born_date}
          name="born_date"
          type="date"
          id="born_date"
          className={`form-control ${fieldClass(errors, "born_date")}`}
          placeholder="Masukkan tanggal lahir"
        />

        {errors.born_date && (
          <div className="invalid-feedback">{errors.born_date}</div>
        )}
      </div>

      <div className="mb-3">
              <label className="form-label fw-semibold">Jenis Kelamin</label>

              <select name="gender" value={form.gender} onChange={handleChanges} className={`form-select ${fieldClass(errors, "gender")}`}>
                <option selected>
                  Pilih jenis kelamin
                </option>

                <option value="male">Laki-laki</option>

                <option value="female">Perempuan</option>
              </select>

              {errors.gender && (
                <div className="invalid-feedback">{errors.gender}</div>
              )}
            </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Alamat</label>

        <input
          onChange={handleChanges}
          value={form.address}
          name="address"
          type="text"
          id="address"
          className={`form-control ${fieldClass(errors, "address")}`}
          placeholder="Masukkan alamat"
        />

        {errors.address && (
          <div className="invalid-feedback">{errors.address}</div>
        )}
      </div>

      <button type="submit" className="btn btn-dark btn-lg w-100">
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
