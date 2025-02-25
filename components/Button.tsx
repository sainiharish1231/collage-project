"use client";
import Link from "next/link";
import React, { ReactNode } from "react";

type ButtonProps = {
  className?: string;
  variant?: "primary" | "outlinePrimary" | "default";
  isLink?: boolean;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  className = "",
  variant = "default",
  isLink = false,
  href = "#",
  onClick,
  children,
}) => {
  let rootClass = "py-2 px-5 text-center rounded-xl ";
  if (variant === "primary") {
    rootClass += "btn_primary text-white shadow-sm";
  } else if (variant === "outlinePrimary") {
    rootClass += "btn_primary_outline text-white shadow-sm";
  } else {
    rootClass += "bg-[#ffffff1A] text-white";
  }
  if (isLink && href) {
    return (
      <Link href={href} className={`${rootClass} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${rootClass} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
