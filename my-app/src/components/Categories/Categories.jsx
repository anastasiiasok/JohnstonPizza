import React from "react";

function Categories({ items }) {
  return (
    <div>
      <div className="categories">
        <ul>
          <li className="active">All Pizzas</li>
          {items.map((name, index) => (
            <li key={`${name}_${index}`}>{name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default Categories;
