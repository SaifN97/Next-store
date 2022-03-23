import { ButtonHTMLAttributes, FunctionComponent, ReactNode } from "react";
import cn from "classnames";
import s from "./Button.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[];
}

const Button: FunctionComponent<Props> = ({ children, className, ...rest }) => {
  return (
    <button className={cn(s.root, className)} type="button" {...rest}>
      {children}
    </button>
  );
};

export default Button;
