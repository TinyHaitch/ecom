import React, { useState } from "react";
import "./index.css";
import Nav from "./Navigation/Nav";
import Product from "./products/Product";
import Recommended from "./recommended/Recommended";
import Sidebar from "./sideBar/Sidebar";

//Database
import products from "./db/data";
import { Card } from "./component/Card";

const App = () => {
  const [selectedCatgory, setSelectedCategory] = useState(null);

  //input filter//
  const [query, setQuery] = useState("");

  const filtereditems = products.filter((product) =>
    product.title.toLowerCase().indexOf(query.toLowerCase() !== -1)
  );

  const handleinputChange = (event) => {
    setQuery(event.target.value);
  };

  // radio filter //
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // button filter //

  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filtedProduct = products;

    // filtering input items

    if (query) {
      filtedProduct = filtereditems;
    }

    //selected filter

    if (selected) {
      filtedProduct = filtedProduct.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );

      return filtedProduct.map(
        ({
          img,
          title,
          star,
          reviews,
          prevPrice,
          newPrice,
          company,
          color,
          category,
        }) => (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
            company={company}
            color={color}
            category={category}
          />
        )
      );
    }
  };

  const result = filteredData(products, selectedCatgory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleinputChange={handleinputChange} />
      <Recommended handleClick={handleClick} />
      <Product result={result} />
    </>
  );
};

export default App;
