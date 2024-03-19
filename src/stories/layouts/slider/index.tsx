import cx from "classnames";

import "../style.css";

interface Props extends React.CSSProperties {
  /**
   * Slider Mode
   */
  mode?: "left" | "right";

  /**
   * CSS Property: background-color
   */
  backgroundColor?: string;
  /**
   * CSS Property: width
   */
  width?: string | number;
  /**
   * CSS Property: padding
   */
  padding?: string | number;
  /**
   * CSS Property: border
   */
  border?: string;
  /**
   * Children Component
   */
  children?: React.ReactNode;
}

/**
 * Zone / Slider
 */
const Slider = ({
  mode = "left",
  backgroundColor = "#fff",
  padding = "8px 12px 12px",
  border = "1px solid rgba(34, 34, 34, 0.1)",
  width = "",
  children,
  ...props
}: Props) => {
  return (
    <div
      className={cx(["clik-id__slider", `clik-id__slider--${mode}`])}
      style={{
        ...props,
        position: "absolute",
        top: "var(--layout-level-header--height)",
        bottom: 0,
        left: mode === "left" ? "var(--layout-level-menu-left--width)" : "",
        right: mode === "right" ? 0 : "",
        backgroundColor,
        border,
        padding,
        width: !width
          ? mode === "left"
            ? "var(--slider-left--width)"
            : "var(--slider-right--width)"
          : width,
        transition: "transform var(--animation-duration) ease-in-out",
        zIndex: 1,
      }}
    >
      {children}
    </div>
  );
};

export default Slider;
