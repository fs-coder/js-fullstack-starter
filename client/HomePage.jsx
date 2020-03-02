import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/home/Home";

export default class HomePage extends React.Component {
  static doctype = "<!DOCTYPE html>";

  static getPartial({ ctx }) {
    return {
      html: <Home />
    };
  }

  render() {
    const { html, helper, title, description } = this.props;
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=0"
          />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content={description} />
          <title>{title}</title>
          <link rel="stylesheet" href={helper.asset("manifest.css")} />
          <link rel="stylesheet" href={helper.asset("HomePage.css")} />
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.asset("manifest.js")} />
          <script src={helper.asset("HomePage.js")} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  const mountEl = document.getElementById("container");
  ReactDOM.hydrate(<Home />, mountEl);
}
