import * as React from "react";
import './Obstacle.css'

const SvgObstacle1 = (props) => (
  <svg
    className="obstacle blade"
    style={{right: props.right}}
    width={95.766 * 2}
    height={82.936 * 2}
    transform={`rotate(${props.deg})`}
    viewBox="0 0 25.338 21.943"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      style={{
        fill: "#000",
        strokeWidth: 0.264583,
      }}
      d="M20.613 36.488 9.477 32.984l-1.533 3.504L5.41 25.092l-3.8.424 8.601-7.892-2.267-3.08 11.135 3.504 1.534-3.504 2.533 11.396 3.801-.424-8.602 7.892z"
      transform="matrix(-1 0 0 1 26.947 -14.544)"
    />
  </svg>
);
export default SvgObstacle1;
