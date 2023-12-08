import React from "react";
import { Link } from "react-router-dom";

export default function ProductInfoButton({ idx, name }) {
  const path = `/productInfo/${idx}`;

  return (
    <Link to={path}>
      <button>Детальний опис товару {name}</button>
    </Link>
  );
}
