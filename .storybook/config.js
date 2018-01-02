import React from 'react';
import {configure, addDecorator} from '@storybook/react';
import styled, {ThemeProvider, injectGlobal} from 'styled-components';

injectGlobal`
  @font-face {
  }
  html {
    font-size: 62.5%;
    display: block;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans", "Helvetica Neue", "Arial", "Helvetica", sans-serif;
    font-weight: normal;
    font-size: 12px;
    line-height: 1.25rem;
    width: 100vw;
    height: 100vh;
    display: block;
  }
  a, abbr, address, article, aside, audio, b, blockquote, body, caption, cite,
  code, dd, del, dfn, dialog, div, dl, dt, em, fieldset, figure, footer, form, h1,
  h2, h3, h4, h5, h6, header, hgroup, hr, html, i, iframe, img, ins, kbd, label,
  legend, li, mark, menu, nav, object, ol, p, pre, q, samp, section, small, span,
  strong, sub, sup, table, tbody, td, tfoot, th, thead, time, tr, ul, var, video {
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
  }
  *, *:before, *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  h1, h2, h3, h4, h5, h6, label, p, button, abbr, a, span, small {
    font-smoothing: antialiased;
    -webkit-font-smoothing: antialiased;
    text-size-adjust: 100%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: "Ubuntu", "Helvetica Neue", "Arial", "Helvetica", sans-serif;
    font-weight: 700;
    margin: 1rem 0;
  }
  a {
    text-decoration: none;
  }
  input:not([type="checkbox"]):not([type="radio"]), button {
    outline: none;
    appearance: none;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
  }
  /* Remove firefox default style for required inputs */
  input[required]:-moz-ui-invalid {
    box-shadow: none;
  }
  h1 {
    font-size: 2rem;
    margin: 1.3rem;
    line-height: 2rem;
  }
  h2 {
    font-size: 1.625rem;
    line-height: 1.625rem;
  }
  h3 {
    font-size: 1.375rem;
    line-height: 1.375rem;
  }
  h4 {
    font-size: 1.2rem;
    line-height: 1.125rem;
  }
  h5, h6{
    font-size: 1.2rem;
  }
  p{
    line-height: 1.6rem;
    font-size: 1.3rem;
  }
}
`;

const Wrapper = styled.div`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  height: 400px;
`;

const req = require.context('./../stories', true, /\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
