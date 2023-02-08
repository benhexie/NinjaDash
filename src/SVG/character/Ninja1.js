import * as React from "react";
import styles from "./NinjaStyles";

const SvgNinja1 = ({bottom}) => (
  <svg
    style={{
      ...styles.ninja,
      'marginBottom': '-5px',
      'bottom': `${bottom}px`
    }}
    width={83.002}
    height={192.629}
    viewBox="0 0 21.961 50.967"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-45.114-3.454a5.715 5.715 0 0 0-1.211 11.298l-.642 2.778-.005.006-.798 1.03-13.405 11.423a.524.524 0 0 0-.059.74l.212.249a.524.524 0 0 0 .74.06l8.392-7.152-6.416 8.285a.524.524 0 0 0 .094.736l.259.2c.23.179.558.137.736-.093l9.51-12.28-3.54 15.33a.147.147 0 0 0-.027.117l-.097.418a.526.526 0 0 0-.036.065L-59 46.637a.524.524 0 0 0 .263.694l.299.135c.265.119.575.001.694-.264l7.32-16.27 3.184 6.132-4.9 6.697a.248.248 0 0 0 .053.347l.71.522c.11.082.265.058.346-.053l5.163-7.056a.247.247 0 0 0 .042-.204c.053-.046.066-.123.023-.205l-4.061-7.822 4.924-21.32A5.715 5.715 0 0 0-39.4 2.26a5.715 5.715 0 0 0-5.715-5.715z"
      style={{
        fill: "#000",
        strokeWidth: 0.264583,
      }}
      transform="translate(61.36 3.454)"
    />
  </svg>
);
export default SvgNinja1;
