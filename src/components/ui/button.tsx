import React from "react";
import {cn} from "../../lib/utils.ts";
import {Loader} from "lucide-react";

type ButtonVariant =
    | "default" | "primary" | "secondary" | "destructive" | "outline" | "ghost" | "link" | "success" | "warning";
type ButtonSize =
    | "xs" | "sm" | "md" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg";
interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    variant? : ButtonVariant;
    size? : ButtonSize;
    loading? : boolean;
    loadingText? : string;
    leftIcon? : React.ReactNode;
    rightIcon? : React.ReactNode;
    fullWidth? : boolean;
    rounded? : "sm" | "md" | "lg" | "full";
}

const variants: Record<ButtonVariant, string> ={
    default:
        "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
    primary:
        "bg-primary text-secondary hover:bg-primary/90 shadow-sm",
    secondary:
        "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    destructive:
        "bg-destructive text-white hover:bg-destructive/90 shadow-sm",
    outline:
        "border border-input bg-background text-foreground hover:bg-accent hover:text-accent-foreground",
    ghost:
        "text-foreground hover:bg-accent hover:text-accent-foreground",
    link:
        "text-primary underline-offset-4 hover:underline",
    success:
        "bg-green-600 text-white hover:bg-green-700 shadow-sm",
    warning:
        "bg-amber-500 text-white hover:bg-amber-600 shadow-sm",
};

const sizes: Record<ButtonSize, string> ={
    xs: "h-7 px-2.5 text-xs gap-1.5",
    sm: "h-8 px-3 text-xs gap-1.5",
    md: "h-10 px-4 text-sm gap-2",
    lg: "h-11 px-5 text-sm gap-2",
    xl: "h-12 px-6 text-base gap-2.5",

    icon: "size-10",
    "icon-sm": "size-8",
    "icon-lg": "size-12",
}

const roundedStyles :Record<NonNullable<ButtonProps["rounded"]>, string> = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full"
}

export const Button = React.forwardRef<
    HTMLButtonElement,
    ButtonProps
>(
    (
        {
            children,
            variant = "primary",
            size = "md",
            loading = false,
            loadingText,
            rightIcon,
            leftIcon,
            fullWidth = false,
            rounded= "md",
            disabled,
            className,
            type = "button",
            ...props
        },
        ref
    ) => {
        const isDisabled = disabled || loading;
        return(
            <button
                ref={ref}
                type={type}
                disabled={isDisabled}
                aria-busy={loading}
                className={cn(
                    "inline-flex shrink-0 items-center justify-center font-medium",
                    "whitespace-nowrap transition-all duration-200",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-ring focus-visible:ring-offset-2",
                    "active:scale-[0.98]",
                    "disabled:pointer-events-none disabled:opacity-50",
                    variants[variant],
                    sizes[size],
                    size.startsWith("icon") ? "rounded-lg" : roundedStyles[rounded],
                    fullWidth && "w-full",
                    className
                )}
                {...props}
            >
                {
                    loading ? (
                        <>
                            <Loader className={'size-4 animate-spin'}/>
                            {loadingText && <span>{loadingText}</span>}
                            {!loadingText && children}
                        </>
                    ):(
                        <>
                            {leftIcon && (
                                <span className={'inline-flex shrink-0'}>
                                      {leftIcon}
                                  </span>
                            )}
                            {children}
                            {rightIcon && (
                                <span className={'inline-flex shrink-0'}>
                                      {rightIcon}
                                  </span>
                            )}
                        </>
                    )}
            </button>
        );
    }
);

Button.displayName = "Button";