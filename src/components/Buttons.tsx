import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  shiny?: boolean;
  speed?: number;
  color?: "white" | "black" | "primary";
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  shiny?: boolean;
  speed?: number;
  color?: "white" | "black" | "primary";
};

interface BaseButtonProps {
  href?: string;
  children: React.ReactNode;
  shiny?: boolean;
  speed?: number;
  color?: "white" | "black" | "primary";
}

export const Button: React.FC<BaseButtonProps & (ButtonProps | LinkProps)> = ({
  href,
  children,
  shiny = false,
  speed = 3,
  color = "white",
  className = "",
  ...props
}) => {

  const baseClasses = `
    relative px-6 py-3 rounded-xl border-[1px]
    backdrop-blur-md font-semibold text-lg
    hover:scale-105 transition
    inline-flex items-center justify-center gap-2
  `;

  // Renk teması ve border
  const colorClasses = {
    white: shiny
      ? "bg-white/10 text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 animate-shine bg-[length:200%_50%] border-white/80"
      : "bg-white/5 text-white border-white/80 hover:bg-white/10",
    black: shiny
      ? "bg-black/10 text-transparent bg-clip-text bg-gradient-to-r from-black/20 via-black to-black/20 animate-shine bg-[length:200%_50%] border-black"
      : "bg-black/0 text-black border-black hover:bg-black/5",
    primary: shiny
      ? "bg-primary/10 text-transparent bg-clip-text bg-gradient-to-r from-primary/80 via-primary/20 to-primary/80 animate-shine bg-[length:200%_50%] border-primary"
      : "bg-primary/10 text-primary border-primary hover:bg-primary/10"
  };



  const style = shiny ? { animationDuration: `${speed}s` } : {};

  if (href) {
    return (
      <a
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={href}
        className={`${baseClasses} ${colorClasses[color]} ${className}`}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={`${baseClasses} ${colorClasses[color]} ${className}`}
      style={style}
    >
      {children}
    </button>
  );
};
