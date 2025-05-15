import React from "react";
import "./Colors.css";
import Input from "../../component/Input";

const Colors = ({ handleChange }) => {
  return (
    <div>
      <h2 className="sidebar-title color-title">Colors </h2>

      <label className="sidebar-label-container">
        <input
          onChange={handleChange}
          type="radio"
          name="test"
          value=""
          id=""
        />
        <span className="checkmark all"></span>All
      </label>

      <Input
        handleChange={handleChange}
        value="black"
        title="Black"
        name="test1"
        color="black"
      />
      <Input
        handleChange={handleChange}
        value="white"
        title="White"
        name="test1"
        color="white"
      />
      <Input
        handleChange={handleChange}
        value="blue"
        title="Blue"
        name="test1"
        color="Blue"
      />
      <Input
        handleChange={handleChange}
        value="green"
        title="Green"
        name="test1"
        color="green"
      />
      <Input
        handleChange={handleChange}
        value="red"
        title="Red"
        name="test1"
        color="red"
      />
    </div>
  );
};

export default Colors;
