const Button = ({ children, isOutlined, size, square }) => {
  return (
    <button
      style={{
        backgroundColor: isOutlined
          ? "transparent"
          : "var(--heading-font-color)",
        color: isOutlined ? "var(--heading-font-color)" : "var(--white)",
        border: isOutlined ? "1px solid var(--heading-font-color)" : "none",
        outline: isOutlined ? "1px solid var(--heading-font-color)" : "none",
        padding:
          size === "small"
            ? "4px 8px"
            : size === "big"
            ? "16px 32px"
            : "8px 16px",
        fontSize: size === "small" ? "12px" : size === "big" ? "16px" : "14px",
        borderRadius: square ? "0" : "var(--surface-radius)",
        fontWeight: "bold",
      }}
    >
      {children}
    </button>
  );
};

export default Button;
