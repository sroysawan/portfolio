const FormatDate = ({isHighlight,children}) => {
  return (
    <div>
      <span
        className={`text-sm ${
            isHighlight ? "text-primaryAccent" : ""
        }`}
      >
        {children}
      </span>
    </div>
  );
};

export default FormatDate;
