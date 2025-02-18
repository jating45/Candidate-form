import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import CardContent from "./Components/CardContent";
import Select from "./Components/Select";
import Input from "./Components/Input";
import Button from "./Components/Button";
import Card from "./Components/Card";
import { useNavigate } from "react-router-dom";

const CandidateList = () => {
  
    const navigate = useNavigate();
  
  const [filters, setFilters] = useState({
    status: "",
    technology: "",
    country: "",
    date: "",
    experience: "",
    recruiter: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleView = () => {
    const isAllFilled = Object.values(filters).every((value) => value.trim() !== "");
  
    if (!isAllFilled) {
      alert("Please fill in all fields before proceeding.");
    } else {
      navigate("/table");
    }
  };

  const handleClear = () => {
    setFilters({
      status: "",
      technology: "",
      country: "",
      date: "",
      experience: "",
      recruiter: "",
    });
  };

  return (
    <div className="container mt-5">
      <Card className="p-4 shadow-lg">
        <CardContent>
          <div className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Status</label>
              <Select
                className="form-select"
                name="status"
                value={filters.status}
                onChange={handleChange}
              
              >
                <option value="">Select Status</option>
                <option value="active">Active</option>
                <option value="inactive">Inactive</option>
              </Select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Technology</label>
              <Select
                className="form-select"
                name="technology"
                value={filters.technology}
                onChange={handleChange}
              >
                <option value="">Select Technology</option>
                <option value="react">React</option>
                <option value="node">Node.js</option>
                <option value="python">Python</option>
                <option value="java">Java</option>
                <option value="nextjs">Next.js</option>
                <option value="javascript">JavaScript</option>
                <option value="c++">C++</option>
              </Select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Country</label>
              <Select
                className="form-select"
                name="country"
                value={filters.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>
                <option value="usa">USA</option>
                <option value="india">India</option>
                <option value="aus">Australia</option>
                <option value="uk">UK</option>
              </Select>
            </div>

            <div className="col-md-6">
              <label className="form-label">Date</label>
              <Input
                className="form-control"
                type="date"
                name="date"
                value={filters.date}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Experience</label>
              <Input
                className="form-control"
                type="text"
                name="experience"
                placeholder="Experience (Years)"
                value={filters.experience}
                onChange={handleChange}
              />
            </div>

            <div className="col-md-6">
              <label className="form-label">Recruiter</label>
              <Input
                className="form-control"
                type="text"
                name="recruiter"
                placeholder="Recruiter Name"
                value={filters.recruiter}
                onChange={handleChange}

              />
            </div>
          </div>

          <div className="d-flex justify-content-between mt-4">
            <Button className="btn btn-primary" onClick={handleView}     >
              View
            </Button>
            <Button className="btn btn-outline-secondary" onClick={handleClear}>
              Clear
            </Button>
            <Button className="btn btn-success" onClick={() => navigate("/add-candidate")}>
      Add Candidate
    </Button>
           
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CandidateList;
