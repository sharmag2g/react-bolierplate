import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div>
      OOps!! the page you are looking for is gone <Link to="/">Home</Link>
    </div>
  );
};

export default Error404;
