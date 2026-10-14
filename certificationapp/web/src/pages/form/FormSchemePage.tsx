import { useState, type ChangeEvent, type FormEvent } from "react";
import {
  validateForm,
  hasErrors,
  fieldClass,
  templateSchemeRules,
  type FormErrors,
} from "../../validations";

type TemplateSchemeForm = {
  scheme_code: string;
  scheme_name: string;
  description: string;
};

function FormSchemePage() {
  const [form, setForm] = useState<TemplateSchemeForm>({
    scheme_code: "",
    scheme_name: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(form, templateSchemeRules);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;
  };

  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="mb-4">
        <h3 className="fw-bold mb-1">Tambah Certification Scheme</h3>

        <p className="text-muted mb-0">Tambahkan scheme sertifikasi baru</p>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body p-4">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Scheme Code</label>

              <input
                name="scheme_code"
                value={form.scheme_code}
                onChange={handleChanges}
                type="text"
                className={`form-control ${fieldClass(errors, "scheme_code")}`}
                placeholder="Contoh: WD-002"
              />

              {errors.scheme_code && (
                <div className="invalid-feedback">{errors.scheme_code}</div>
              )}

              <div className="form-text">
                Kode unik untuk certification scheme.
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">Scheme Name</label>

              <input
                name="scheme_name"
                value={form.scheme_name}
                onChange={handleChanges}
                type="text"
                className={`form-control ${fieldClass(errors, "scheme_name")}`}
                placeholder="Contoh: Web Developer"
              />

              {errors.scheme_name && (
                <div className="invalid-feedback">{errors.scheme_name}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Description</label>

              <textarea
                name="description"
                value={form.description}
                onChange={handleChanges}
                className={`form-control ${fieldClass(errors, "description")}`}
                rows={5}
                placeholder="Masukkan deskripsi certification scheme"
              ></textarea>

              {errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
            </div>

            <div className="d-flex gap-2">
              <a href="schemes.html" className="btn btn-secondary">
                Kembali
              </a>

              <button type="submit" className="btn btn-primary">
                Simpan Scheme
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormSchemePage;
