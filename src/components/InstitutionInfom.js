import { useState } from "react";
import "./InstitutionInfo.css";

const InstitutionInfom = () => {
  const institutionsData = [
    {
      name: "Sri Chaitanya College",
      courses: "MPC, BiPC and Arts",
      location: "Lakshmipuram",
    },
    {
      name: "VVITU - Vasireddy Venkatadri International Technological University",
      courses: "BTech, MTech, MBA, BBA",
      location: "Namburu",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredInstitutions, setFilteredInstitutions] =
    useState(institutionsData);

  const handleSearch = () => {
    const result = institutionsData.filter((inst) =>
      `${inst.name} ${inst.courses} ${inst.location}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredInstitutions(result);
  };

  return (
    <div className="institution-page">
      <h2 className="page-title">Institutions / Colleges</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name, course or location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="institution-cards">
        {filteredInstitutions.length > 0 ? (
          filteredInstitutions.map((inst, index) => (
            <div className="institution-card" key={index}>
              <h3>{inst.name}</h3>
              <p>
                <strong>Courses:</strong> {inst.courses}
              </p>
              <p>
                <strong>Location:</strong> {inst.location}
              </p>
            </div>
          ))
        ) : (
          <p>No institutions found</p>
        )}
      </div>
    </div>
  );
};

export default InstitutionInfom;
