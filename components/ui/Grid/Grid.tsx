import { FunctionComponent, ReactNode } from "react";
import styles from "./Grid.module.css";
import cn from "classnames";

interface Props {
  children: ReactNode;
  layout?: "A" | "B";
}

const Grid: FunctionComponent<Props> = ({ children, layout = "A" }) => {
  const rootClassname = cn(styles.root, {
    [styles.layoutA]: layout === "A",
    [styles.layoutB]: layout === "B",
  });

  return <div className={rootClassname}>{children}</div>;
};

export default Grid;
