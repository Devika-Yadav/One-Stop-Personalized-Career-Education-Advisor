import { useEffect, useState } from "react";
import api from "../api/axios";

const InstitutionsAdmin = () => {
  const [institutions, setInstitutions] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [form, setForm] = useState({
    institutionName: "",
    stream: "",
    location: "",
    institutionWebsite: ""
  });

  useEffect(() => {
    fetchInstitutions();
  }, []);

  const fetchInstitutions = async () => {
    const res = await api.get("/api/institution/all");
    setInstitutions(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ADD
  const addInstitution = async () => {
    await api.post("/api/institution/addInstitution", form);
    alert("Institution added");
    fetchInstitutions();
    resetForm();
  };

  // SELECT FOR EDIT
  const handleSelectInstitution = (e) => {
    const id = e.target.value;
    if (!id) return;

    const inst = institutions.find(i => i.institutionId === id);

    setSelectedId(inst.institutionId);
    setIsEdit(true);
    setForm({
      institutionName: inst.institutionName,
      stream: inst.stream,
      location: inst.location,
      institutionWebsite: inst.institutionWebsite
    });
  };

  // UPDATE
  const updateInstitution = async () => {
    if (!selectedId) {
      alert("Select an institution first");
      return;
    }

    await api.put(`/api/institution/update/${selectedId}`, form);
    alert("Institution updated");
    fetchInstitutions();
    resetForm();
  };

  // DELETE
  const deleteInstitution = async () => {
    if (!selectedId) {
      alert("Select an institution first");
      return;
    }

    if (!window.confirm("Delete this institution?")) return;

    await api.delete(`/api/institution/delete/${selectedId}`);
    alert("Institution deleted");
    fetchInstitutions();
    resetForm();
  };

  const resetForm = () => {
    setForm({
      institutionName: "",
      stream: "",
      location: "",
      institutionWebsite: ""
    });
    setSelectedId(null);
    setIsEdit(false);
  };

  return (
    <section className="admin-card careers-card">
      <h4 className="card-title">Manage Institutions</h4>

      {/* SELECT INSTITUTION */}
      <div className="form-row">
        <label>Select Institution:</label>
        <select onChange={handleSelectInstitution} value={selectedId || ""}>
          <option value="">-- Select --</option>
          {institutions.map(i => (
            <option key={i.institutionId} value={i.institutionId}>
              {i.institutionName}
            </option>
          ))}
        </select>
      </div>

      {/* FORM */}
      <div className="card-content">
        <div className="form-left">
          <div className="form-row">
            <label>Institution Name:</label>
            <input
              name="institutionName"
              value={form.institutionName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Stream:</label>
            <input
              name="stream"
              value={form.stream}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Location:</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Website:</label>
            <input
              name="institutionWebsite"
              value={form.institutionWebsite}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ACTION BUTTONS */}
        <div className="form-actions">
          {!isEdit ? (
            <button className="btn-add" onClick={addInstitution}>
              + Add Institution
            </button>
          ) : (
            <>
              <button className="btn-edit" onClick={updateInstitution}>
                Update
              </button>
              <button className="btn-delete" onClick={deleteInstitution}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default InstitutionsAdmin;
