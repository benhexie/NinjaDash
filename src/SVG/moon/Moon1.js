import * as React from "react";
const SvgMoon1 = (props) => (
  <svg style={styles.moon}
    width={120}
    height={120}
    viewBox="0 0 8.621 8.621"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      style={{
        fill: "#cccbb4",
        strokeWidth: 0.264583,
      }}
      cx={-12.547}
      cy={31.398}
      r={4.311}
      transform="translate(16.858 -27.087)"
    />
  </svg>
);

const styles = {
  moon: {
    position: 'absolute',
    right: 0,
    margin: '3rem'
  }
}

export default SvgMoon1;
