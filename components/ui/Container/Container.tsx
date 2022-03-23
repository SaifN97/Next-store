import React, {
  ComponentType,
  FunctionComponent,
  HTMLAttributes,
  ReactNode,
} from "react";

interface Props {
  children: ReactNode[] | ReactNode;
  el?: ComponentType<HTMLAttributes<HTMLElement>>;
}
const Container: FunctionComponent<Props> = ({
  children,
  el: Component = "div",
}) => {
  return <Component className="px-6 mx-auto max-w-8xl">{children}</Component>;
};

export default Container;
