import { useEffect, useState, type ChangeEvent } from "react";
import useUser from "../../hooks/useUser";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import type { UpdateProfilePayload } from "../../types/candidate.type";
import useCandidate from "../../hooks/useCandidate";

export default function ProfilePage() {
  const { user, candidate, getUser } = useUser();
  const { logout } = useAuth();
  const { updateProfile } = useCandidate();

  const [isEdit, setIsEdit] = useState(false);

  const userData = localStorage.getItem("user");
  const userId = JSON.parse(userData!);
  const navigate = useNavigate();

  const [form, setForm] = useState<UpdateProfilePayload>({
    username: "",
    full_name: "",
    nik: 0,
    email: "",
    phone_number: "",
    born_date: "",
    gender: "",
    address: "",
  });

  const handleChanges = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = () => {
    setIsEdit(true);
    setForm({
      username: user!.username,
      full_name: candidate!.full_name,
      nik: candidate!.nik,
      email: candidate!.email,
      phone_number: candidate!.phone_number,
      born_date: candidate!.born_date,
      gender: candidate!.gender,
      address: candidate!.address,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    await updateProfile(form, userId.username);
    getUser(userId?.id);
    setIsEdit(false);
  };

  const handleLogout = async () => {
    await logout();
    navigate("/");
    window.location.reload();
  };

  useEffect(() => {
    getUser(userId?.id);
  }, []);

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2 className="fw-bold mb-1">Profil Saya</h2>
          <p className="text-secondary mb-0">Informasi akun dan data pribadi</p>
        </div>

        <button onClick={() => handleEdit()} className="btn btn-primary">
          Edit Profil
        </button>
      </div>
      <div className="card border-0 shadow-sm">
        <form onSubmit={handleSubmit}>
        {!isEdit && (
          <div className="card-body p-4">
            <div className="mb-4">
              <div>
                <h4 className="fw-bold mb-1">
                  {candidate?.full_name || "Nama belum tersedia"}
                </h4>

                <p className="text-secondary mb-2">{user?.username}</p>

                <span className="badge text-bg-primary">
                  {user?.role || "user"}
                </span>
              </div>
            </div>

            <hr />

            <h5 className="fw-semibold mb-3">Informasi Pribadi</h5>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="text-secondary small mb-1">Nama Lengkap</div>
                <div className="fw-medium text-break">
                  {candidate?.full_name || "-"}
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Username</div>
                <div className="fw-medium text-break">
                  {user?.username || "-"}
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">NIK</div>
                <div className="fw-medium text-break">
                  {candidate?.nik ?? "-"}
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Email</div>
                <div className="fw-medium text-break">
                  {candidate?.email || "-"}
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Nomor HP</div>
                <div className="fw-medium text-break">
                  {candidate?.phone_number ? `${candidate.phone_number}` : "-"}
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Tanggal Lahir</div>
                <div className="fw-medium">
                  {candidate?.born_date ? candidate.born_date : "-"}
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Jenis Kelamin</div>
                <div className="fw-medium">
                  {candidate?.gender === "male"
                    ? "Laki-laki"
                    : candidate?.gender === "female"
                      ? "Perempuan"
                      : candidate?.gender || "-"}
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">
                  Skema Sertifikasi
                </div>
                <div className="fw-medium">
                  {candidate?.certification_scheme?.scheme_name ??
                    "Belum memilih skema"}
                </div>
              </div>

              <div className="col-12">
                <div className="text-secondary small mb-1">Alamat</div>
                <div className="fw-medium text-break">
                  {candidate?.address || "-"}
                </div>
              </div>
            </div>

            <hr />

            <button
              onClick={() =>
                confirm("Apakah kamu yakin ingin logout?") && handleLogout()
              }
              className="btn btn-danger"
            >
              Logout
            </button>
          </div>
        )}

        {isEdit && (
          <div className="card-body p-4">
            <div className="mb-4">
              <div>
                <h4 className="fw-bold mb-1">
                  {candidate?.full_name || "Nama belum tersedia"}
                </h4>

                <p className="text-secondary mb-2">{user?.username}</p>

                <span className="badge text-bg-primary">
                  {user?.role || "user"}
                </span>
              </div>
            </div>

            <hr />

            <h5 className="fw-semibold mb-3">Informasi Pribadi</h5>

            <div className="row g-4">
              <div className="col-md-6">
                <div className="text-secondary small mb-1">Nama Lengkap</div>
                <div className="fw-medium text-break">
                  <input
                    onChange={handleChanges}
                    id="full_name"
                    value={form.full_name}
                    type="text"
                    name="full_name"
                    className="form-control"
                    placeholder="Nama Lengkap"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Username</div>
                <div className="fw-medium text-break">
                  <input
                    onChange={handleChanges}
                    id="username"
                    value={form.username}
                    type="text"
                    name="username"
                    className="form-control"
                    placeholder="Username"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">NIK</div>
                <div className="fw-medium text-break">
                  <input
                    onChange={handleChanges}
                    id="nik"
                    value={form.nik}
                    type="text"
                    name="nik"
                    className="form-control"
                    placeholder="NIK"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Email</div>
                <div className="fw-medium text-break">
                  <input
                    onChange={handleChanges}
                    id="email"
                    value={form.email}
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="example@gmail.com"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Nomor HP</div>
                <div className="fw-medium text-break">
                  <input
                    onChange={handleChanges}
                    id="phone_number"
                    value={form.phone_number}
                    type="text"
                    name="phone_number"
                    className="form-control"
                    placeholder="08XXXXXXX.."
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Tanggal Lahir</div>
                <div className="fw-medium">
                  <input
                    onChange={handleChanges}
                    id="born_date"
                    value={form.born_date}
                    type="date"
                    name="born_date"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">Jenis Kelamin</div>
                <div className="fw-medium">
                  <select
                    onChange={handleChanges}
                    id="gender"
                    value={form.gender}
                    name="gender"
                    className="form-select"
                  >
                    <option value="male">Laki-laki</option>
                    <option value="female">Perempuan</option>
                  </select>
                </div>
              </div>

              <div className="col-md-6">
                <div className="text-secondary small mb-1">
                  Skema Sertifikasi
                </div>
                <div className="fw-medium">
                  {candidate?.certification_scheme?.scheme_name ??
                    "Belum memilih skema"}
                </div>
              </div>

              <div className="col-12">
                <div className="text-secondary small mb-1">Alamat</div>
                <div className="fw-medium text-break">
                  <input
                    onChange={handleChanges}
                    id="address"
                    value={form.address}
                    type="text"
                    name="address"
                    className="form-control"
                    placeholder="Address.."
                  />
                </div>
              </div>
            </div>

            <hr />

            <button
              type="submit"
              className="btn btn-success"
            >
              Save
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className="btn btn-warning mx-2"
            >
              Cancel
            </button>
          </div>
        )}
        </form>
      </div>
    </div>
  );
}
