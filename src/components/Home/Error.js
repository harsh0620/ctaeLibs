import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Error404, Content Not Available</h1>

      <h2>Help the repo to get better</h2>

      <Link to="/contribute">
        <h1>Contribute</h1>
      </Link>
    </div>
  );
};

export default Error;
