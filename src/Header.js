import React from "react";

function Header(props) {
  return (
    <header>
      <h1>{props.title}</h1>
    </header>
  );
}

// default props
Header.defaultProps = {
  title: "Default Title",
};

export default Header;
