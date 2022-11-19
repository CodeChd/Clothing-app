import "./button.styles.scss";

const BUTTON_CLASS = {
    
}

const Button = ({ children, buttonType, ...otherProps }) => {
  return <button className={`button-container ${BUTTON_CLASS[buttonType]}`} {...otherProps}>{children}</button>;
};
export default Button;
