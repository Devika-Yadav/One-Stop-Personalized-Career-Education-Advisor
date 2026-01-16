import { useEffect, useState } from "react";
import api from "../api/axios";

const ResourcesAdmin = () => {
  const [resources, setResources] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [form, setForm] = useState({
    resourceName: "",
    skills: "",
    platform: "",
    resourceLink: ""
  });

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    const res = await api.get("/api/resource/all");
    setResources(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // SELECT RESOURCE (same as institution select)
  const handleSelectResource = (e) => {
    const id = e.target.value;
    if (!id) return;

    const resource = resources.find(r => r.resourceId === id);

    setSelectedId(resource.resourceId);
    setIsEdit(true);
    setForm({
      resourceName: resource.resourceName,
      skills: resource.skills,
      platform: resource.platform,
      resourceLink: resource.resourceLink
    });
  };

  // ADD
  const addResource = async () => {
    await api.post("/api/resource/add", form);
    alert("Resource added");
    fetchResources();
    resetForm();
  };

  // UPDATE
  const updateResource = async () => {
    if (!selectedId) {
      alert("Select a resource first");
      return;
    }

    await api.put(`/api/resource/update/${selectedId}`, form);
    alert("Resource updated");
    fetchResources();
    resetForm();
  };

  // DELETE
  const deleteResource = async () => {
    if (!selectedId) {
      alert("Select a resource first");
      return;
    }

    if (!window.confirm("Delete this resource?")) return;

    await api.delete(`/api/resource/delete/${selectedId}`);
    alert("Resource deleted");
    fetchResources();
    resetForm();
  };

  const resetForm = () => {
    setForm({
      resourceName: "",
      skills: "",
      platform: "",
      resourceLink: ""
    });
    setSelectedId(null);
    setIsEdit(false);
  };

  return (
    <section className="admin-card careers-card">
      <h4 className="card-title">Manage Resources</h4>

      {/* SELECT RESOURCE */}
      <div className="form-row">
        <label>Select Resource:</label>
        <select onChange={handleSelectResource} value={selectedId || ""}>
          <option value="">-- Select --</option>
          {resources.map(r => (
            <option key={r.resourceId} value={r.resourceId}>
              {r.resourceName}
            </option>
          ))}
        </select>
      </div>

      {/* FORM */}
      <div className="card-content">
        <div className="form-left">
          <div className="form-row">
            <label>Resource Name:</label>
            <input
              name="resourceName"
              value={form.resourceName}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Skills:</label>
            <input
              name="skills"
              value={form.skills}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Platform:</label>
            <input
              name="platform"
              value={form.platform}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <label>Resource Link:</label>
            <input
              name="resourceLink"
              value={form.resourceLink}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          {!isEdit ? (
            <button className="btn-add" onClick={addResource}>
              + Add Resource
            </button>
          ) : (
            <>
              <button className="btn-edit" onClick={updateResource}>
                Update
              </button>
              <button className="btn-delete" onClick={deleteResource}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default ResourcesAdmin;
