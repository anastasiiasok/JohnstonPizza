import React from "react";
import { useState } from "react";

function Categories({ items, onClickItem }) {
  const [activeItem, setActiveItem] = React.useState(null);
  const onSelectItem = (index) => {
    setActiveItem(index);
  };
  return (
    <div>
      <div className="categories">
        <ul>
          <li
            className={activeItem === null ? "active" : ""}
            onClick={() => onSelectItem(null)}
          >
            All Menu
          </li>
          {items.map((name, index) => (
            <li
              className={activeItem === index ? "active" : ""}
              onClick={() => setActiveItem(index)}
              key={`${name}_${index}`}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Categories;
