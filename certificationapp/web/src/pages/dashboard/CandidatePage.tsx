import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import useCandidate from "../../hooks/useCandidate";
import useScheme from "../../hooks/useScheme";
import type {
  CandidatePayload,
  CandidateState,
} from "../../types/candidate.type";
import { Link } from "react-router-dom";
import useUser from "../../hooks/useUser";
import {
  validateForm,
  hasErrors,
  fieldClass,
  candidateRules,
  type FormErrors,
} from "../../validations";

function CandidatePage() {
  const {
    candidates,
    getCandidates,
    addCandidate,
    changeCandidate,
    deleteCandidate,
  } = useCandidate();
  const { schemes, getSchemes } = useScheme();
  const { users, getUsers } = useUser();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(0);
  const [search, setSearch] = useState("");

  const [form, setForm] = useState<CandidatePayload>({
    full_name: "",
    nik: 0,
    email: "",
    phone_number: "",
    born_date: "",
    gender: "",
    address: "",
    user_id: 0,
    certification_scheme_id: 0,
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const filteredCandidates = candidates.filter((candidate) =>
    candidate.full_name.toLowerCase().includes(search.toLowerCase()) ||
    candidate.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(form, candidateRules);
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    if (isEdit) {
      changeCandidate(form, idEdit);
    } else {
      addCandidate(form);
    }

    getCandidates();
    handleClose();
  };

  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleAdd = () => {
    setIsModalOpen(true);
    setIsEdit(false);
    setIdEdit(0);
    setErrors({});
  };

  const handleEdit = (candidate: CandidateState) => {
    setIsModalOpen(true);
    setIsEdit(true);
    setIdEdit(candidate.id);
    setErrors({});
    setForm({
      full_name: candidate.full_name,
      nik: candidate.nik,
      email: candidate.email,
      phone_number: candidate.phone_number,
      born_date: candidate.born_date,
      gender: candidate.gender,
      address: candidate.address,
      user_id: candidate.user_id,
      certification_scheme_id: candidate.certification_scheme!.id,
    });
  };

  const handleDelete = async (id: number) => {
    if (confirm("Are u sure delete this data?")) {
      await deleteCandidate(id);
      getCandidates();
    }
  };

  const handleClose = () => {
    setIsModalOpen(false);
    setIsEdit(false);
    setIdEdit(0);
    setErrors({});
    setForm({
      full_name: "",
      nik: 0,
      email: "",
      phone_number: "",
      born_date: "",
      gender: "",
      address: "",
      user_id: 0,
      certification_scheme_id: 0,
    });
  };

  useEffect(() => {
    getCandidates();
    getUsers();
    getSchemes();
  }, []);
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Data Peserta</h3>

          <p className="text-muted mb-0">Kelola data peserta sertifikasi</p>
        </div>

        <button onClick={() => handleAdd()} className="btn btn-primary">
          + Tambah Peserta
        </button>
      </div>

      {isModalOpen && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">User</label>

            <select onChange={handleChanges} name="user_id" value={form.user_id} className={`form-select ${fieldClass(errors, "user_id")}`}>
              <option value="">Pilih user</option>
              {
                users.map((user) => (
                  <option className="" value={user.id}>{user.id} - {user.username}</option>
                ))
              }
            </select>

            {errors.user_id && (
              <div className="invalid-feedback">{errors.user_id}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Nama Lengkap</label>

            <input
              onChange={handleChanges}
              id="full_name"
              value={form.full_name}
              name="full_name"
              type="text"
              className={`form-control ${fieldClass(errors, "full_name")}`}
              placeholder="Masukkan nama lengkap"
            />

            {errors.full_name && (
              <div className="invalid-feedback">{errors.full_name}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">NIK</label>

            <input
              onChange={handleChanges}
              id="nik"
              value={form.nik}
              name="nik"
              type="text"
              className={`form-control ${fieldClass(errors, "nik")}`}
              placeholder="NIK"
            />

            {errors.nik && <div className="invalid-feedback">{errors.nik}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Email</label>

            <input
              onChange={handleChanges}
              id="email"
              value={form.email}
              name="email"
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
              onChange={handleChanges}
              id="phone_number"
              value={form.phone_number}
              type="text"
              name="phone_number"
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
              onChange={handleChanges}
              id="born_date"
              value={form.born_date}
              type="date"
              name="born_date"
              className={`form-control ${fieldClass(errors, "born_date")}`}
            />

            {errors.born_date && (
              <div className="invalid-feedback">{errors.born_date}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Jenis Kelamin</label>

            <select
              onChange={handleChanges}
              value={form.gender}
              id="gender"
              name="gender"
              className={`form-select ${fieldClass(errors, "gender")}`}
            >
              <option value={""}>Pilih jenis kelamin</option>

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
              onChange={handleChanges}
              id="address"
              value={form.address}
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
              onChange={handleChanges}
              name="certification_scheme_id"
              className="form-select"
              value={form.certification_scheme_id ?? 0}
            >
              <option selected disabled>
                Pilih certification scheme
              </option>

              {schemes.map((scheme) => (
                <option value={scheme.id}>
                  {scheme.scheme_code} - {scheme.scheme_name}
                </option>
              ))}
            </select>
          </div>

          <div className="d-flex gap-2">
            <button onClick={() => handleClose()} className="btn btn-secondary">
              Kembali
            </button>

            <button type="submit" className="btn btn-primary">
              Simpan Peserta
            </button>
          </div>
        </form>
      )}

      <div className="card border-0 shadow-sm my-4">
        <div className="card-body">
          <div className="row g-2">
            <div className="col-md">
              <input
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                value={search}
                type="text"
                className="form-control"
                placeholder="Cari nama peserta..."
              />
            </div>

            {/* <div className="col-md-4">
              <select className="form-select">
                {schemes.map((scheme) => (
                  <option selected>{scheme.scheme_name}</option>
                ))}
              </select>
            </div>

            <div className="col-md-3">
              <button className="btn btn-secondary w-100">Cari</button>
            </div> */}
          </div>
        </div>
      </div>

      <div className="card border-0 shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>No. HP</th>
                  <th>Tanggal Lahir</th>
                  <th>Gender</th>
                  <th>Scheme</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {filteredCandidates.map((candidate) => (
                  <tr>
                    <td>{candidate.id}</td>
                    <td>{candidate.full_name}</td>
                    <td>{candidate.email}</td>
                    <td>{candidate.phone_number}</td>
                    <td>{candidate.born_date}</td>
                    <td>{candidate.gender}</td>
                    <td>{candidate.certification_scheme?.scheme_name || "-"}</td>
                    <td className="text-nowrap">
                      <Link
                        to={`/candidate/${candidate.id}`}
                        className="btn btn-info btn-sm"
                      >
                        Detail
                      </Link>
                      <button
                        onClick={() => handleEdit(candidate)}
                        className="btn btn-warning btn-sm mx-2"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(candidate.id)}
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
  );
}

export default CandidatePage;
