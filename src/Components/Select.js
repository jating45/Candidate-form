const Select = ({ className, children, ...props }) => {
    return (
      <select className={`form-select ${className}`} {...props}>
        {children}
      </select>
    );
  };
  
  export default Select;
  