import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import useScheme from "../../hooks/useScheme";
import type { SchemePayload, SchemeState } from "../../types/scheme.type";
import { Link } from "react-router-dom";
import {
  validateForm,
  hasErrors,
  fieldClass,
  schemeRules,
  type FormErrors,
} from "../../validations";

function SchemePage() {
  const { schemes, getSchemes, addScheme, changeScheme, deleteScheme } =
    useScheme();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(0);

  const [form, setForm] = useState<SchemePayload>({
    scheme_code: "",
    scheme_name: "",
    description: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentCode = schemes.find((scheme) => scheme.id === idEdit)
      ?.scheme_code;

    const validationErrors = validateForm(
      form,
      schemeRules(schemes, { currentCode }),
    );
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    if (isEdit) {
      await changeScheme(form, idEdit);
      handleClose();
    } else {
      await addScheme(form);
    }

    getSchemes();
    setIsEdit(false);
    setIsModalOpen(false);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleAdd = () => {
    setIsEdit(false);
    setIsModalOpen(true);
    setErrors({});
    setForm({
      scheme_code: "",
      scheme_name: "",
      description: "",
    });
  };

  const handleEdit = (scheme: SchemeState) => {
    setIsEdit(true);
    setIsModalOpen(true);
    setIdEdit(scheme.id);
    setErrors({});
    setForm({
      scheme_code: scheme.scheme_code,
      scheme_name: scheme.scheme_name,
      description: scheme.description,
    });
  };

  const handleDelete = async (id: number) => {
    setIdEdit(id);
    deleteScheme(id);
    getSchemes();
  };

  const handleClose = () => {
    setIsEdit(false);
    setIsModalOpen(false);
    setErrors({});
    setForm({
      scheme_code: "",
      scheme_name: "",
      description: "",
    });
  };

  useEffect(() => {
    getSchemes();
  }, []);

  return (
    <>
      <div className="col-md-9 col-lg-10 content p-4">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h3 className="fw-bold mb-1">Certification Scheme</h3>

            <p className="text-muted mb-0">Kelola scheme sertifikasi</p>
          </div>

          {!isModalOpen && (
            <button onClick={() => handleAdd()} className="btn btn-primary">
              + Tambah Scheme
            </button>
          )}
        </div>

        {isModalOpen && (
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-semibold">Scheme Code</label>

              <input
                onChange={handleChange}
                type="text"
                className={`form-control ${fieldClass(errors, "scheme_code")}`}
                placeholder="Contoh: WD"
                name="scheme_code"
                value={form.scheme_code}
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
                onChange={handleChange}
                type="text"
                className={`form-control ${fieldClass(errors, "scheme_name")}`}
                placeholder="Contoh: Web Developer"
                name="scheme_name"
                value={form.scheme_name}
              />

              {errors.scheme_name && (
                <div className="invalid-feedback">{errors.scheme_name}</div>
              )}
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Description</label>

              <textarea
                onChange={handleChange}
                className={`form-control ${fieldClass(errors, "description")}`}
                rows={5}
                placeholder="Masukkan deskripsi certification scheme"
                name="description"
                value={form.description}
              ></textarea>

              {errors.description && (
                <div className="invalid-feedback">{errors.description}</div>
              )}
            </div>

            <div className="d-flex gap-2">
              <button
                onClick={() => handleClose()}
                className="btn btn-secondary"
              >
                Kembali
              </button>

              <button type="submit" className="btn btn-primary">
                Simpan Scheme
              </button>
            </div>
          </form>
        )}
        <div className="card border-0 shadow-sm mt-4">
          <div className="card-body">
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Scheme Code</th>
                    <th>Scheme Name</th>
                    <th>Deskripsi</th>
                    <th>Jumlah Peserta</th>
                    <th>Aksi</th>
                  </tr>
                </thead>

                <tbody>
                  {schemes.map((scheme) => (
                    
                      <tr>
                        <td>{scheme.id}</td>

                        <td>
                          <span className="badge text-bg-primary">
                            {scheme.scheme_code}
                          </span>
                        </td>

                        <td>{scheme.scheme_name}</td>

                        <td>{scheme.description}</td>

                        <td>{scheme.candidate_count}</td>

                        <td className="text-nowrap">
                          <Link
                            to={`/scheme/${scheme.id}`}
                            className="btn btn-info btn-sm"
                          >
                            Detail
                          </Link>

                          <button
                            onClick={() => handleEdit(scheme)}
                            className="btn btn-warning btn-sm mx-2"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() =>
                              confirm("Sure delete this data?") &&
                              handleDelete(scheme.id)
                            }
                            className="btn btn-danger btn-sm"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SchemePage;
