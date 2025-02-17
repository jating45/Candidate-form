import { useState } from "react";

const data = [
  { id: 1, category: "Status", name: "Active" },
  { id: 2, category: "Status", name: "UnActive" },
  { id: 3, category: "technology", name: "React-js" },
  { id: 4, category: "technology", name: "java" },
  { id: 5, category: "technology", name: "Python" },
  { id: 6, category: "technology", name: "Node js" },
];

const  Dropdown = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleFilterChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData =
    selectedCategory === "All"
      ? data
      : data.filter((item) => item.category === selectedCategory);

  return (
    <div>
      <h2>Dropdown Filter</h2>
      <label>Filter by Category: </label>
      <select value={selectedCategory} onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Status">Status</option>
        <option value="technology">technology</option>
      </select>

      <ul>
        {filteredData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
