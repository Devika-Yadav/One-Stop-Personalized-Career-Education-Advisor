import {  useState } from "react";

const CareersAdmin = () => {
  const [careers, setCareers] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  const [career, setCareer] = useState({
    name: "",
    skills: "",
    category: "",
    salary: ""
  });

  // SELECT CAREER
  const handleSelectCareer = (e) => {
    const id = e.target.value;
    if (!id) return resetForm();

    const c = careers.find(c => c.id === parseInt(id));
    if (!c) return;

    setSelectedId(c.id);
    setIsEdit(true);
    setCareer({
      name: c.name,
      skills: c.skills,
      category: c.category,
      salary: c.salary
    });
  };

  // ADD
  const addCareer = () => {
    const newCareer = {
      id: careers.length ? careers[careers.length - 1].id + 1 : 1,
      ...career
    };
    setCareers([...careers, newCareer]);
    alert("Career added");
    resetForm();
  };

  // UPDATE
  const updateCareer = () => {
    if (!selectedId) {
      alert("Select a career first");
      return;
    }
    setCareers(
      careers.map(c =>
        c.id === selectedId ? { ...c, ...career } : c
      )
    );
    alert("Career updated");
    resetForm();
  };

  // DELETE
  const deleteCareer = () => {
    if (!selectedId) {
      alert("Select a career first");
      return;
    }
    if (!window.confirm("Delete this career?")) return;

    setCareers(careers.filter(c => c.id !== selectedId));
    alert("Career deleted");
    resetForm();
  };

  const resetForm = () => {
    setCareer({
      name: "",
      skills: "",
      category: "",
      salary: ""
    });
    setSelectedId(null);
    setIsEdit(false);
  };

  return (
    <section className="admin-card careers-card">
      <h4 className="card-title">Manage Careers</h4>

      {/* SELECT CAREER */}
      <div className="form-row">
        <label>Select Career:</label>
        <select onChange={handleSelectCareer} value={selectedId || ""}>
          <option value="">-- Select --</option>
          {careers.map(c => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      {/* FORM */}
      <div className="card-content">
        <div className="form-left">
          <div className="form-row">
            <label>Career Name:</label>
            <input
              name="name"
              value={career.name}
              onChange={e => setCareer({ ...career, name: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label>Skills:</label>
            <input
              name="skills"
              value={career.skills}
              onChange={e => setCareer({ ...career, skills: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label>Category:</label>
            <input
              name="category"
              value={career.category}
              onChange={e => setCareer({ ...career, category: e.target.value })}
            />
          </div>

          <div className="form-row">
            <label>Salary:</label>
            <input
              name="salary"
              value={career.salary}
              onChange={e => setCareer({ ...career, salary: e.target.value })}
            />
          </div>
        </div>

        {/* ACTIONS */}
        <div className="form-actions">
          {!isEdit ? (
            <button className="btn-add" onClick={addCareer}>
              + Add Career
            </button>
          ) : (
            <>
              <button className="btn-edit" onClick={updateCareer}>
                Update
              </button>
              <button className="btn-delete" onClick={deleteCareer}>
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default CareersAdmin;
