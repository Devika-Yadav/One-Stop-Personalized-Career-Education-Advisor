import { useEffect, useState } from "react";
import api from "../api/axios";
import "./Resources.css";

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // 🔹 Fetch all resources on load
  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const res = await api.get("/api/resource/all");
      setResources(res.data);
    } catch (err) {
      console.error("Error fetching resources", err);
    }
  };

  // 🔹 Search resources
  const handleSearch = async () => {
    try {
      if (!searchTerm.trim()) {
        fetchResources();
        return;
      }

      const res = await api.get(
        `/api/resource/search?keyword=${searchTerm}`
      );
      setResources(res.data);
    } catch (err) {
      console.error("Search failed", err);
    }
  };

  return (
    <div className="resource-page">
      <h2 className="page-title">Resources</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, skill or platform"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="resource-cards">
        {resources.length > 0 ? (
          resources.map((res) => (
            <div className="resource-card" key={res.resourceId}>
              <h3>{res.resourceName}</h3>

              <p>
                <strong>Skills:</strong> {res.skills}
              </p>

              <p>
                <strong>Platform:</strong> {res.platform}
              </p>

              <a
                href={res.resourceLink}
                target="_blank"
                rel="noreferrer"
              >
                Visit Resource
              </a>
            </div>
          ))
        ) : (
          <p>No resources found</p>
        )}
      </div>
    </div>
  );
};

export default Resources;
