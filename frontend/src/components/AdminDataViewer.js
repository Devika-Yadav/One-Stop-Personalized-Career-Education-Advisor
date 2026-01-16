import { useEffect, useState } from "react";
import api from "../api/axios";

const AdminDataViewer = () => {
  const [selectedTable, setSelectedTable] = useState("");
  const [rows, setRows] = useState([]);

  /* 🔹 SAMPLE DATA (until backend is ready) */
  const sampleData = {
    careers: [
      {
        name: "Software Engineer",
        skills: "Java, React",
        category: "IT",
        salary: "10 LPA"
      }
    ],
    courses: [
      {
        name: "React Course",
        platform: "Udemy",
        skills: "JavaScript, React"
      }
    ]
  };

  /* 🔹 FETCH DATA BASED ON SELECTION */
  useEffect(() => {
    if (!selectedTable) return;

    const fetchData = async () => {
      try {
        let res;

        switch (selectedTable) {
          case "institutions":
            res = await api.get("/api/institution/all");
            setRows(res.data);
            break;

          case "resources":
            res = await api.get("/api/resource/all");
            setRows(res.data);
            break;

          case "users":
            res = await api.get("/api/users/all");
            setRows(res.data);
            break;

          case "careers":
          case "courses":
            setRows(sampleData[selectedTable]);
            break;

          default:
            setRows([]);
        }
      } catch (err) {
        console.error(err);
        setRows([]);
      }
    };

    fetchData();
  }, [selectedTable]);

  /* 🔹 RENDER TABLE */
  const renderTable = () => {
    if (!rows || rows.length === 0) {
      return <p className="no-data">No data found</p>;
    }

    const headers = Object.keys(rows[0]);

    return (
      <table className="admin-data-table">
        <thead>
          <tr>
            {headers.map((h) => (
              <th key={h}>{h.toUpperCase()}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {headers.map((h) => (
                <td key={h}>{row[h]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <section className="admin-card">
      <h4>View Table Data</h4>

      <select
        className="table-selector"
        value={selectedTable}
        onChange={(e) => setSelectedTable(e.target.value)}
      >
        <option value="">-- Select Table --</option>
        <option value="careers">Careers</option>
        <option value="courses">Courses</option>
        <option value="institutions">Institutions</option>
        <option value="resources">Resources</option>
        <option value="users">Users</option>
      </select>

      <div className="table-container">{renderTable()}</div>
    </section>
  );
};

export default AdminDataViewer;
