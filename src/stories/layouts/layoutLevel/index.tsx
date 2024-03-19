import "../style.css";

interface Props extends React.CSSProperties {
  /**
   * CSS Property: background-color
   */
  backgroundColor?: string;
  /**
   * CSS Property: width
   */
  width?: string | number;
  /**
   * CSS Property: height
   */
  height?: string | number;
  /**
   * CSS Property: padding
   */
  padding?: string | number;
  /**
   * Children Component
   */
  children?: React.ReactNode;
}

/**
 * Layout Level with CSS Properties
 */
const LayoutLevel = ({
  backgroundColor = "#fff",
  width = "100%",
  height = "100%",
  padding = 16,
  children,
  ...props
}: Props) => {
  return (
    <div
      className="clik-id__layout-level"
      style={{
        ...props,
        position: "relative",
        boxSizing: "border-box",
        backgroundColor,
        width,
        height,
        padding,
      }}
    >
      {children}
    </div>
  );
};

export default LayoutLevel;
