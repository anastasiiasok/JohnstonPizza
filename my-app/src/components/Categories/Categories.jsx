import React from "react";
import { useState } from "react";

function Categories({ items, onClickItem }) {
  const state = useState(9);

  return (
    <div>
      <div className="categories">
        <ul>
          <li className="active">All Pizzas</li>
          {items.map((name, index) => (
            <li onClick={() => onClickItem(name)} key={`${name}_${index}`}>
              {name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Categories;
