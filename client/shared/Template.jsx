import React from "react";
import ReactDOM from "react-dom";

export class Template extends React.Component {
  static doctype = "<!DOCTYPE html>";

  render() {
    const { title, description, asset, html, helper } = this.props;
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
          <link rel="stylesheet" href={helper.asset(`${asset}.css`)} />
        </head>
        <body>
          <div id="root" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.asset("manifest.js")} />
          <script src={helper.asset(`${asset}.js`)} />
        </body>
      </html>
    );
  }
}

export const render = App => {
  if (__CLIENT__) {
    const mountEl = document.getElementById("root");
    ReactDOM.render(<App />, mountEl);
  }
};
