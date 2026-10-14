import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState, type ChangeEvent, type FormEvent } from "react";
import type { RegisterPayload } from "../../types/auth.type";

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

  const handleChanges = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

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

      <div className="mb-3">
        <label className="form-label fw-semibold">Nama Lengkap</label>

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
        <label className="form-label fw-semibold">
          Nomor Induk Kependudukan
        </label>

        <input
          onChange={handleChanges}
          value={form.nik}
          name="nik"
          type="text"
          id="nik"
          className="form-control"
          placeholder="Masukkan nik"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Email</label>

        <input
          onChange={handleChanges}
          value={form.email}
          name="email"
          type="email"
          id="email"
          className="form-control"
          placeholder="Masukkan email"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Nomor Telepon</label>

        <input
          onChange={handleChanges}
          value={form.phone_number}
          name="phone_number"
          type="text"
          id="phone_number"
          className="form-control"
          placeholder="Masukkan no telepon"
        />
      </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Tanggal Lahir</label>

        <input
          onChange={handleChanges}
          value={form.born_date}
          name="born_date"
          type="date"
          id="born_date"
          className="form-control"
          placeholder="Masukkan tanggal lahir"
        />
      </div>

      <div className="mb-3">
              <label className="form-label fw-semibold">Jenis Kelamin</label>

              <select name="gender" value={form.gender} onChange={handleChanges} className="form-select">
                <option selected disabled>
                  Pilih jenis kelamin
                </option>

                <option value="male">Laki-laki</option>

                <option value="female">Perempuan</option>
              </select>
            </div>

      <div className="mb-3">
        <label className="form-label fw-semibold">Alamat</label>

        <input
          onChange={handleChanges}
          value={form.address}
          name="address"
          type="text"
          id="address"
          className="form-control"
          placeholder="Masukkan alamat"
        />
      </div>

      <button type="submit" className="btn btn-dark btn-lg w-100">
        Register
      </button>
    </form>
  );
}

export default RegisterPage;
