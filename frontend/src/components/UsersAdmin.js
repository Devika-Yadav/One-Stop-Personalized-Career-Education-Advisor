import { useEffect, useState } from "react";
import api from "../api/axios";

const UsersAdmin = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const res = await api.get("/api/users/all");
    setUsers(res.data);
  };

  const makeAdmin = async (userId) => {
    if (!window.confirm("Promote this user to ADMIN?")) return;

    await api.put(`/api/users/make-admin/${userId}`);
    alert("User promoted to ADMIN");
    fetchUsers();
  };

  const deleteUser = async (userId) => {
    if (!window.confirm("Delete this user permanently?")) return;

    await api.delete(`/api/users/delete/${userId}`);
    alert("User deleted");
    fetchUsers();
  };

  return (
    <section className="admin-card">
      <h4>Manage Users</h4>

      <table className="users-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>Role</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((u) => (
            <tr key={u.userId}>
              <td>{u.email}</td>
              <td>{u.role}</td>

              <td>
                {u.role !== "ADMIN" && (
                  <button
                    className="btn-edit"
                    onClick={() => makeAdmin(u.userId)}
                  >
                    Make Admin
                  </button>
                )}

                <button
                  className="btn-delete"
                  onClick={() => deleteUser(u.userId)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default UsersAdmin;
