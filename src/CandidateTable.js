import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Select from "react-select";
import { useNavigate } from "react-router-dom";

const CandidateTable = () => {
  const navigate = useNavigate();

  const [candidates, setCandidates] = useState([]);
  const [formData, setFormData] = useState({
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
  });

  const skillOptions = [
    { value: "JavaScript", label: "JavaScript" },
    { value: "Python", label: "Python" },
    { value: "Java", label: "Java" },
    { value: "C++", label: "C++" },
    { value: "React js", label: "React js" },
    { value: "Node js", label: "Node js" },
    { value: "TypeScript", label: "TypeScript" },
    { value: "C", label: "C" },
  ];

  useEffect(() => {
    const storedCandidates = JSON.parse(localStorage.getItem("candidates")) || [];
    setCandidates(storedCandidates);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSkillChange = (selectedOptions) => {
    setFormData({ ...formData, Skill: selectedOptions });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedCandidates = [...candidates, formData];

    localStorage.setItem("candidates", JSON.stringify(updatedCandidates));
    setCandidates(updatedCandidates);

    setFormData({
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
    });
    navigate("/table");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Candidate Form</h2>
      <form onSubmit={handleSubmit} className="row g-3">
        {Object.keys(formData).map((key) => (
          <div className="col-md-6" key={key}>
            <label className="form-label">{key.replace(/([A-Z])/g, " $1")}</label>
            {key === "Status" ? (
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            ) : key === "Country" ? (
              <select
                name={key}
                value={formData[key]}
                onChange={handleChange}
                className="form-select"
                required
              >
                <option value="">Select Country</option>
                <option value="USA">USA</option>
                <option value="Canada">Canada</option>
                <option value="UK">UK</option>
                <option value="India">India</option>
              </select>
            ) : key === "Skill" ? (
              <Select
                isMulti
                options={skillOptions}
                value={formData.Skill}
                onChange={handleSkillChange}
                className="basic-multi-select"
                classNamePrefix="select"
                autoComplete="off"
              />
            ) : key === "PhoneNumber" ? (
              <input
                type="tel"
                name="PhoneNumber"
                placeholder="Phone Number"
                value={formData.PhoneNumber}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "");
                  if (value.length <= 10) {
                    setFormData({ ...formData, PhoneNumber: value });
                  }
                }}
                className="form-control"
                required
                autoComplete="off"
                maxLength={10}
                pattern="\d{10}"
                title="Phone number must be exactly 10 digits"
              />
            ) : (
              <input
                type={key === "Email" ? "email" : "text"}
                name={key}
                placeholder={key.replace(/([A-Z])/g, " $1")}
                value={formData[key]}
                onChange={handleChange}
                className="form-control"
                required
                autoComplete="off"
              />
            )}
          </div>
        ))}
        <div className="col-12">
          <button type="submit" className="btn btn-primary w-100" >
            Submit
          </button>
        </div>
        <div className="col-12">
          <button
            type="button"
            className="btn btn-secondary w-100"
            onClick={() => navigate("/home")}
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
};

export default CandidateTable;
