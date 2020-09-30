import React from "react";
import classes from "./Header.module.css";
import { useState, useEffect } from "react";
function Header() {
  const [show, handelShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 80) {
        handelShow(true);
      } else {
        handelShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`${classes.header} ${show ? classes.headerbg : ""}`}>
      <img
        src="https://lh3.googleusercontent.com/proxy/c1DsorCpn_t9J40qW-ToD9aNSwZF000gvgAuELfWoLkjJJBnY3LQ1u1f1Lnv9FmMYT0kXmxtMpu5M9-MuDqx0qaQvEZiFS5SmeMRnI7UenoouTjWLR4"
        alt=""
        className={classes.logo}
      />
      <img
        src="https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg:large"
        alt=""
        className={classes.image}
      />
    </div>
  );
}

export default Header;
