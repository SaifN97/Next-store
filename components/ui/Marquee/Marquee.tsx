import cn from "classnames";
import { FunctionComponent, ReactNode } from "react";
import Ticker from "react-ticker";
import s from "./Marquee.module.css";

interface Props {
  children: ReactNode[];
  variant?: "primary" | "secondary";
}

const Marquee: FunctionComponent<Props> = ({
  children,
  variant = "primary",
}) => {
  const rootClassname = cn(s.root, {
    [s.secondary]: variant === "secondary",
  });

  return (
    <div className={rootClassname}>
      <Ticker offset={80}>
        {() => <div className={s.container}>{children}</div>}
      </Ticker>
    </div>
  );
};

export default Marquee;
