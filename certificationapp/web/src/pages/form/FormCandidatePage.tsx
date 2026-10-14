import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  validateForm,
  hasErrors,
  fieldClass,
  templateCandidateRules,
  type FormErrors,
} from "../../validations";

type TemplateCandidateForm = {
  participant_number: string;
  full_name: string;
  email: string;
  phone_number: string;
  born_date: string;
  gender: string;
  address: string;
  certification_scheme: string;
};

function FormCandidatePage() {
  const [form, setForm] = useState<TemplateCandidateForm>({
    participant_number: "",
    full_name: "",
    email: "",
    phone_number: "",
    born_date: "",
    gender: "",
    address: "",
    certification_scheme: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(form, templateCandidateRules);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;
  };

  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Tambah Peserta</h3>

        <p className="text-muted mb-0">Tambahkan data peserta baru</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Nomor Peserta</label>

              <input
                name="participant_number"
                value={form.participant_number}
                onChange={handleChanges}
                type="text"
                className={`form-control ${fieldClass(errors, "participant_number")}`}
                placeholder="Contoh: CRT-005"
              />

              {errors.participant_number && (
                <div className="invalid-feedback">
                  {errors.participant_number}
                </div>
              )}
            </div>

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
              <label className="form-label fw-semibold">Email</label>

              <input
                name="email"
                value={form.email}
                onChange={handleChanges}
                type="email"
                className={`form-control ${fieldClass(errors, "email")}`}
                placeholder="nama@email.com"
              />

              {errors.email && (
                <div className="invalid-feedback">{errors.email}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Nomor Telepon</label>

              <input
                name="phone_number"
                value={form.phone_number}
                onChange={handleChanges}
                type="text"
                className={`form-control ${fieldClass(errors, "phone_number")}`}
                placeholder="08xxxxxxxxxx"
              />

              {errors.phone_number && (
                <div className="invalid-feedback">{errors.phone_number}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Tanggal Lahir</label>

              <input
                name="born_date"
                value={form.born_date}
                onChange={handleChanges}
                type="date"
                className={`form-control ${fieldClass(errors, "born_date")}`}
              />

              {errors.born_date && (
                <div className="invalid-feedback">{errors.born_date}</div>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Jenis Kelamin</label>

              <select
                name="gender"
                value={form.gender}
                onChange={handleChanges}
                className={`form-select ${fieldClass(errors, "gender")}`}
              >
                <option value="" disabled>
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

              <textarea
                name="address"
                value={form.address}
                onChange={handleChanges}
                className={`form-control ${fieldClass(errors, "address")}`}
                rows={4}
                placeholder="Masukkan alamat lengkap"
              ></textarea>

              {errors.address && (
                <div className="invalid-feedback">{errors.address}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Certification Scheme
              </label>

              <select
                name="certification_scheme"
                value={form.certification_scheme}
                onChange={handleChanges}
                className="form-select"
              >
                <option value="" disabled>
                  Pilih certification scheme
                </option>

                <option value="1">WD-001 - Web Developer</option>

                <option value="2">DB-001 - Database Administrator</option>

                <option value="3">NW-001 - Network Administrator</option>

                <option value="4">CY-001 - Cyber Security</option>
              </select>
            </div>

            <div className="d-flex gap-2">
              <a href="candidates.html" className="btn btn-secondary">
                Kembali
              </a>

              <button type="submit" className="btn btn-primary">
                Simpan Peserta
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormCandidatePage;
