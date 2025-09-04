import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  shiny?: boolean;
  speed?: number;
};

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode;
  shiny?: boolean;
  speed?: number;
};

interface BaseButtonProps {
  href?: string;
  children: React.ReactNode;
  shiny?: boolean;
  speed?: number;
}

// Tek component, props ayrımı yapıyoruz
export const Button: React.FC<BaseButtonProps & (ButtonProps | LinkProps)> = ({
  href,
  children,
  shiny = false,
  speed = 3,
  ...props
}) => {
  const classes = `
  relative px-6 py-3 rounded-xl border border-white/20
  ${shiny ? "bg-white/10 text-transparent bg-clip-text bg-gradient-to-r from-white/20 via-white to-white/20 animate-shine bg-[length:200%_100%]" 
           : "bg-white/5 text-white"}
  backdrop-blur-md font-semibold text-lg
  hover:scale-105 transition
`;

  const style = shiny ? { animationDuration: `${speed}s` } : {};

  if (href) {
    return (
      <a
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        href={href}
        className={classes + ` ${props.className || ""}`}
        style={style}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      className={classes + ` ${props.className || ""}`}
      style={style}
    >
      {children}
    </button>
  );
};
