import clsx from "clsx";

type ButtonVariants = "default" | "ghost" | "danger";
type ButtonSizes = "sm" | "md" | "lg";
type ButtonProps = {
  variant: ButtonVariants;
  size: ButtonSizes;
} & React.ComponentProps<"button">;

export function Button({
  variant = "default",
  size = "md",
  ...props
}: ButtonProps) {
  const buttonVariants: Record<ButtonVariants, string> = {
    default: clsx(
      "p-1.5",
      "border-2",
      "border-blue-700",
      "rounded-[4px]",
      "flex columns-1",
      "bg-white",
      "hover:bg-blue-200",
      "mr-1",
      "cursor-pointer",
      "hover:text-red-500",
      "disabled:text-slate-500 disabled:cursor-not-allowed"
    ),
    ghost: clsx(
      "bg-slate-300",
      "transition",
      "hover:bg-slate-400",
      "text-slate-950",
      "px-4",
      "py-2",
      "cursor-pointer",
      "rounded-lg",
      "flex",
      "items-center",
      "justify-center",
      "disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
    ),
    danger: clsx(
      "bg-red-300",
      "transition",
      "hover:bg-red-500",
      "text-slate-950",
      "px-4",
      "py-2",
      "cursor-pointer",
      "rounded-lg",
      "flex",
      "items-center",
      "justify-center",
      "disabled:bg-slate-200 disabled:text-slate-400 disabled:cursor-not-allowed"
    ),
  };

  const buttonSizes: Record<ButtonSizes, string> = {
    sm: clsx(),
    md: clsx(),
    lg: clsx(),
  };

  const buttonClass = clsx(buttonVariants[variant], buttonSizes[size]);

  return (
    <div>
      <button className={buttonClass} {...props} />
    </div>
  );
}
