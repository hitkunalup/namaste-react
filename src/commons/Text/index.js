import React from "react";
import { PropTypes } from "prop-types";
import "./index.scss";

const Text = ({
  className = "",
  small = false,
  weight = "regular",
  ...props
}) => {
  return (
    <p
      className={`text ${small ? "small" : ""} ${weight} ${className}`}
      {...props}
    >
      {props.children}
    </p>
  );
};

Text.propTypes = {
  className: PropTypes.string,
  weight: PropTypes.oneOf(["regular", "medium", "bold"]),
  small: PropTypes.bool,
};

Text.defaultProps = {
  className: "",
  small: false,
  weight: "regular",
};

export default Text;
