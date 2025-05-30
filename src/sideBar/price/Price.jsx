import React from "react";
import "./Price.css";
import Input from "../../component/Input";

const Price = ({ handleChange }) => {
  return (
    <div className="ml">
      <h2 className="sidebar-label-container">Price</h2>

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
        value={0}
        title="$0 - $50"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={100}
        title="$50 - $100"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={150}
        title="$100 - $150"
        name="test2"
      />
      <Input
        handleChange={handleChange}
        value={200}
        title="Over 1450 "
        name="test2"
      />
    </div>
  );
};

export default Price;
