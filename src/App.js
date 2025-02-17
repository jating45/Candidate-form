import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CandidateList from "./Home";
import CandidateTable from "./CandidateTable"; 

import CandidateLists from "./Table";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CandidateList />} />
        <Route path="/add-candidate" element={<CandidateTable />} />
        <Route path="/home" element={<CandidateList/>} />
        <Route path="/table" element={<CandidateLists/>} />

      </Routes>
    </Router>
  );
}

export default App;
