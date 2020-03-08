import React from "react";
import Home from "./Home";
import { Template, render } from "../shared/Template";

export default class Page extends Template {
  static defaultProps = {
    asset: "home"
  };

  static getPartial() {
    return {
      html: <Home />
    };
  }
}

render(Home);
