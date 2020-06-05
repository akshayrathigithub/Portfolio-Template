import React from "react";
import Home from "./Home/Home";
import Contact from "./Contact/Contact";
import About from "./About/About";
import Blog from "./Blog/Blog";
import Portfolio from "./Portfolio/Portfolio";
import Resume from "./Resume/Resume";

const ContentArea = (props) => {
    if (props.Slide === "HOME") {
      return (
          <Home />
      )
    } else if (props.Slide === "ABOUT ME") {
      return (
          <About />
      )
    } else if (props.Slide === "PORTFOLIO") {
      return (
          <Portfolio />
      )
    } else if (props.Slide === "RESUME") {
      return (
          <Resume />
      )
    }else if (props.Slide === "BLOG") {
      return (
          <Blog />
      )
    } else {
      return (
          <Contact />
      )
    }
  }
export default ContentArea