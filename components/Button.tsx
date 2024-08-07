import React from "react";
interface ButtonPrompt{
  className?:string,
  href?:any,
  onClick?:any,
  children:JSX.Element,
  px?:string,
  Dowloaded?:string,
}
const Button:React.FC<ButtonPrompt> = ({ className, href,Dowloaded, onClick, children, px }) => {
  const classes = `p-3 rounded-3xl flex items-center gap-x-2 font-yekanBlack bg-gradient-to-r from-indigo-500 to-secondary shadow-btn hover:text-primary duration-300 cursor-pointer ${px || "px-7"}
    ${className || ""}`;
  const spanClasses = "relative z-10";
  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
  const renderLink = () => (
    <a href={href} className={classes} download={Dowloaded}>
      <span className={spanClasses}>{children}</span>
    </a>
  );
  return href ? renderLink() : renderButton();
};
export default Button;
