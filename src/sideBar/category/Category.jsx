import React from "react";
import "./Category.css";
import Input from "../../component/Input";

const Category = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title">Categoty</h2>

      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            name="test"
            value=""
            id=""
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
};

export default Category;
