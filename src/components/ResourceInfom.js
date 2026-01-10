import { useState } from "react";
import "./ResourceInfo.css";

const ResourceInfo = () => {
  const resourcesData = [
    {
      title: "Master in Bio",
      skills: "leaf identification, plant recognition",
      platform: "YouTube",
      link: "https://www.youtube.com",
    },
    {
      title: "Intermediate React Course",
      skills: "HTML, CSS and JavaScript",
      platform: "EDX",
      link: "https://www.edx.org",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredResources, setFilteredResources] =
    useState(resourcesData);

  const handleSearch = () => {
    const result = resourcesData.filter((res) =>
      `${res.title} ${res.skills} ${res.platform}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredResources(result);
  };

  return (
    <div className="resource-page">
      <h2 className="page-title">Resources</h2>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search resources..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      <div className="resource-cards">
        {filteredResources.length > 0 ? (
          filteredResources.map((res, index) => (
            <div className="resource-card" key={index}>
              <h3>{res.title}</h3>
              <p><strong>Skills:</strong> {res.skills}</p>
              <p><strong>Platform:</strong> {res.platform}</p>
              <a href={res.link} target="_blank" rel="noreferrer">
                View Course
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

export default ResourceInfo;
