import React from "react";

let newDate = new Date();
let year = newDate.getFullYear();

function Footer() {
  return (
    <div className="footer">
      <p>
        copyright &copy; <span>segun ajiboye</span> || {year}
      </p>
    </div>
  );
}

export default Footer;
