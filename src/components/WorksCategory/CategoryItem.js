import React from "react";
import { Link } from "react-scroll";
import "./CategoryItem.scss";

export const CategoryItem = ({ category }) => {
  return (
    <div className="category-item__container">
      <div className="category-item__header">
        <h4>{category.title}</h4>
        <p>{category.desc}</p>
      </div>
      <Link
        className="category-item__Link"
        to={category.scrollComponent}
        smooth={true}
      >
        <button>view</button>
      </Link>
    </div>
  );
};
