import { useEffect, useState } from "react";
import api from "../api/axios";
import "./Institutions.css";
import HeaderAfterLogin from "./HeaderAfterLogin";
import Footer from "../Footer";

function Institutions() {
  const [institutions, setInstitutions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAllInstitutions();
  }, []);

  const fetchAllInstitutions = async () => {
    try {
      const res = await api.get("/api/institution/all");
      setInstitutions(res.data);
    } catch (err) {
      console.error(err);
      alert("Failed to load institutions");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      fetchAllInstitutions();
      return;
    }

    try {
      const res = await api.get(
        `/api/institution/search?keyword=${searchTerm}`
      );
      setInstitutions(res.data);
    } catch (err) {
      console.error(err);
      alert("Search failed");
    }
  };

  return (
    <>
    {/* <HeaderAfterLogin/> */}
    <div className="institution-page">
      <h2 className="page-title">Institutions / Colleges</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, stream or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {loading ? (
        <p>Loading institutions...</p>
      ) : (
        <div className="institution-cards">
          {institutions.length > 0 ? (
            institutions.map((inst) => (
              <div className="institution-card" key={inst.institutionId}>
                <h3>{inst.institutionName}</h3>

                <p>
                  <strong>Stream:</strong> {inst.stream}
                </p>

                <p>
                  <strong>Location:</strong> {inst.location}
                </p>

                <p>
                  <strong>Website:</strong>{" "}
                  <a
                    href={inst.institutionWebsite}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Website
                  </a>
                </p>
              </div>
            ))
          ) : (
            <p>No institutions found</p>
          )}
        </div>
      )}
    </div>
   
    </>
  );
}

export default Institutions;
