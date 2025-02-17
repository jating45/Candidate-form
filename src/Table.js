import { useState, useEffect } from "react";
import { FaSearchDollar } from "react-icons/fa";

const CandidateLists = () => {
  const [search, setSearch] = useState("");
  const [candidates, setCandidates] = useState([]);
  const [filteredCandidates, setFilteredCandidates] = useState([]);

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];
    setCandidates(storedCandidates);
    setFilteredCandidates(storedCandidates);
  }, []);

  const formData = {
    FirstName: "",
    LastName: "",
    JobCode: "",
    PhoneNumber: "",
    Email: "",
    Experience: "",
    Skill: [],
    Technology: "",
    Recruiter: "",
    Reference: "",
    Country: "",
    Status: "",
  };

  const handleSearch = () => {
    const filtered = candidates.filter((candidate) =>
      `${candidate.FirstName} ${candidate.LastName}`
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setFilteredCandidates(filtered);
  };

  return (
    <div className="container mt-5">
      <h2 className="my-4">Candidate List</h2>
      <div className="input-group mb-3">
        <input
          type="text"
          placeholder="Search by Name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="form-control"
          autoComplete="off"
        />
        <button className="btn btn-outline-primary" onClick={handleSearch}>
          <FaSearchDollar />
        </button>
      </div>

      <table className="table table-bordered">
        <thead className="table-light">
          <tr>
            {Object.keys(formData).map((key) => (
              <th key={key}>{key.replace(/([A-Z])/g, " $1")}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredCandidates.length > 0 ? (
            filteredCandidates.map((candidate, index) => (
              <tr key={index}>
                {Object.keys(formData).map((key) => (
                  <td key={key}>
                    {key === "Skill"
                      ? candidate[key]?.map((skill) => skill.label).join(", ") || "N/A"
                      : candidate[key] || "N/A"}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={Object.keys(formData).length} className="text-center">
                No candidates found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateLists;
