import React from 'react';
import ReactDOM from 'react-dom';
import About from './pages/about';

export default class HomePage extends React.Component {
  static doctype = '<!DOCTYPE html>';

  static getPartial() {
    return {
      html: <About />,
    };
  }

  render() {
    const { html, helper, title } = this.props;
    return (
      <html>
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width,initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="description" content="" />
          <title>{title}</title>
        </head>
        <body>
          <div id="container" dangerouslySetInnerHTML={{ __html: html }} />
          <script src={helper.asset('manifest.js')} />
          <script src={helper.asset('about-page.js')} />
        </body>
      </html>
    );
  }
}

if (__CLIENT__) {
  const mountEl = document.getElementById('container');
  ReactDOM.hydrate(<About />, mountEl);
}
