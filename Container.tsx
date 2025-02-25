import React, { ReactNode, HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({
  className = "",
  children,
  ...rest
}) => {
  return (
    <div
      {...rest}
      className={`max-w-[1320px] mx-auto px-2 md:px-5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
