import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import useUser from "../../hooks/useUser";
import type { UserPayload, UserState } from "../../types/user.type";
import {
  validateForm,
  hasErrors,
  fieldClass,
  userRules,
  type FormErrors,
} from "../../validations";

function UserPage() {
  const { users, getUsers, addUser, changeUser, deleteUser } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [idEdit, setIdEdit] = useState(0);

  const [form, setForm] = useState<UserPayload>({
    username: "",
    role: "",
    password: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentUsername = users.find((user) => user.id === idEdit)?.username;

    const validationErrors = validateForm(
      form,
      userRules(users, { isEdit, currentUsername }),
    );
    setErrors(validationErrors);
    if (hasErrors(validationErrors)) return;

    if (isEdit) {
      await changeUser(form, idEdit);
    } else {
      await addUser(form);
    }

    getUsers();
    handleClose();
  }

  const handleAdd = () => {
    setIsEdit(false);
    setIsModalOpen(true);
    setErrors({});
  }

  const handleEdit = async (user: UserState) => {
    setIsEdit(true);
    setIsModalOpen(true);
    setIdEdit(user.id);
    setErrors({});
    setForm({
      username: user.username,
      role: user.role,
      password: ""
    });
  }

  const handleDelete = async (id: number) => {
    if (confirm("Are you sure delete this data?")) {
      await deleteUser(id);
    }

    getUsers();
  }

  const handleClose = () => {
    setIsEdit(false);
    setIsModalOpen(false);
    setIdEdit(0);
    setErrors({});
    setForm({
      username: "",
      role: "",
      password: ""
    });
  }

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="col-md-9 col-lg-10 content p-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h3 className="fw-bold mb-1">Users</h3>

          <p className="text-muted mb-0">Kelola pengguna sistem</p>
        </div>

        {!isModalOpen && (
          <button
            onClick={() => handleAdd()}
            className="btn btn-primary"
          >
            + Tambah User
          </button>
        )}
      </div>

      {isModalOpen && (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label fw-semibold">Username</label>

            <input
              type="text"
              className={`form-control ${fieldClass(errors, "username")}`}
              placeholder="Masukkan nama lengkap"
              name="username"
              id="username"
              value={form.username}
              onChange={handleChange}
            />

            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label fw-semibold">Role</label>
            
            <select className="form-select" name="role" value={form.role} onChange={handleChange}>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="form-label fw-semibold">Password</label>

            <input
              type="password"
              className={`form-control ${fieldClass(errors, "password")}`}
              placeholder="Masukkan password"
              name="password"
              id="password"
              value={form.password}
              onChange={handleChange}
            />

            {errors.password && (
              <div className="invalid-feedback">{errors.password}</div>
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
              Simpan User
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
                  <th>Username</th>
                  <th>Role</th>
                  <th>Aksi</th>
                </tr>
              </thead>

              <tbody>
                {users.map((user) => (
                  <tr>
                    <td>{user.id}</td>

                    <td>{user.username}</td>

                    <td>{user.role}</td>

                    <td className="text-nowrap">
                      <button onClick={() => handleEdit(user)} className="btn btn-warning btn-sm">Edit</button>

                      <button onClick={() => handleDelete(user.id)} className="btn btn-danger btn-sm mx-3">Hapus</button>
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

export default UserPage;
