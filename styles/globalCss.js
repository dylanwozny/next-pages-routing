import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
/*!
 * Bootstrap Reboot v4.2.1 (https://getbootstrap.com/)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)
 */
*,
*::before,
*::after {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
article,
aside,
figcaption,
figure,
footer,
header,
hgroup,
main,
nav,
section {
  display: block;
}
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  background-color: #fff;
}
[tabindex="-1"]:focus {
  outline: 0 !important;
}
hr {
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  height: 0;
  overflow: visible;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}
abbr[title],
abbr[data-original-title] {
  text-decoration: underline;
  -webkit-text-decoration: underline dotted;
  text-decoration: underline dotted;
  cursor: help;
  border-bottom: 0;
  text-decoration-skip-ink: none;
}
address {
  margin-bottom: 1rem;
  font-style: normal;
  line-height: inherit;
}
ol,
ul,
dl {
  margin-top: 0;
  margin-bottom: 1rem;
  list-style-type: none;
}
ol ol,
ul ul,
ol ul,
ul ol {
  margin-bottom: 0;
}
dt {
  font-weight: 700;
}
dd {
  margin-bottom: 0.5rem;
  margin-left: 0;
}
blockquote {
  margin: 0 0 1rem;
}
b,
strong {
  font-weight: bolder;
}
small {
  font-size: 80%;
}
sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}
sub {
  bottom: -0.25em;
}
sup {
  top: -0.5em;
}
a {
  color: #007bff;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  color: #0056b3;
  text-decoration: underline;
}
a:not([href]):not([tabindex]) {
  color: inherit;
  text-decoration: none;
}
a:not([href]):not([tabindex]):hover,
a:not([href]):not([tabindex]):focus {
  color: inherit;
  text-decoration: none;
}
a:not([href]):not([tabindex]):focus {
  outline: 0;
}
pre,
code,
kbd,
samp {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono",
    "Courier New", monospace;
  font-size: 1em;
}
pre {
  margin-top: 0;
  margin-bottom: 1rem;
  overflow: auto;
}
figure {
  margin: 0 0 1rem;
}

svg {
  overflow: hidden;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
}
caption {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  color: #6c757d;
  text-align: left;
  caption-side: bottom;
}
th {
  text-align: inherit;
}
label {
  display: inline-block;
  margin-bottom: 0.5rem;
}
button {
  border-radius: 0;
}
button:focus {
  outline: 1px dotted;
  outline: 5px auto -webkit-focus-ring-color;
}
input,
button,
select,
optgroup,
textarea {
  margin: 0;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
}
button,
input {
  overflow: visible;
}
button,
select {
  text-transform: none;
}
button,
[type="button"],
[type="reset"],
[type="submit"] {
  -webkit-appearance: button;
}
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  padding: 0;
  border-style: none;
}
input[type="radio"],
input[type="checkbox"] {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
}
input[type="date"],
input[type="time"],
input[type="datetime-local"],
input[type="month"] {
  -webkit-appearance: listbox;
}
textarea {
  overflow: auto;
  resize: vertical;
}
fieldset {
  min-width: 0;
  padding: 0;
  margin: 0;
  border: 0;
}
legend {
  display: block;
  width: 100%;
  max-width: 100%;
  padding: 0;
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  line-height: inherit;
  color: inherit;
  white-space: normal;
}
progress {
  vertical-align: baseline;
}
[type="number"]::-webkit-inner-spin-button,
[type="number"]::-webkit-outer-spin-button {
  height: auto;
}
[type="search"] {
  outline-offset: -2px;
  -webkit-appearance: none;
}
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none;
}
::-webkit-file-upload-button {
  font: inherit;
  -webkit-appearance: button;
}
output {
  display: inline-block;
}
summary {
  display: list-item;
  cursor: pointer;
}
template {
  display: none;
}
[hidden] {
  display: none !important;
}

html,
body,
p,
ol,
ul,
li,
dl,
dt,
dd,
blockquote,
figure,
fieldset,
legend,
textarea,
pre,
iframe,
hr,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  padding: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: 100%;
  font-weight: normal;
}
ul {
  list-style: none;
}
button,
input,
select,
textarea {
  margin: 0;
}

img,
embed,
iframe,
object,
video {
  height: auto;
  max-width: 100%;
}
audio {
  max-width: 100%;
}
iframe {
  border: 0;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
table td,
table th {
  padding: 0;
  text-align: left;
}


@import url("https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,500;0,700;0,900;1,100;1,300&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300&display=swap");

html {
  font-size: 100%;
  background-color: #f5f2f2;
} /*16px*/

body {
  background-color: #f5f2f2;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  line-height: 1.75;
  color: #22273a;
}

p {
  margin-bottom: 1rem;
  font-family: "Open Sans", sans-serif;
}

h1,
h2,
h3,
h4,
h5 {
  margin: 1rem 0 1.38rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  line-height: 1.3;
}

h1 {
  margin-top: 0;
  font-size: 3.052rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

h2 {
  font-size: clamp(1.953rem, 8vw, 2.441rem);
}

h3 {
  font-size: 1.953rem;
}

h4 {
  font-size: 1.563rem;
}

h5 {
  font-size: 1.25rem;
}

small,
.text_small {
  font-size: 0.8rem;
}

main{
  max-width: 31rem;
  margin: 0 auto;
  padding: .5rem;
}

`

export default GlobalStyles;