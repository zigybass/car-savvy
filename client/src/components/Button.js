import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div>
      <Link to="/login">
        <button
          className="btn waves-effect yellow darken-1 black-text waves-dark"
          type="submit"
          name="action"
        >
          Login
        </button>
      </Link>
    </div>
  );
}

export default Button;