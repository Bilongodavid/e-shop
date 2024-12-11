interface Props {
  children: React.ReactNode;
  outline: boolean;
  color?: "primery" | "white" | "white-outline";
  icon?: boolean;
  size?: "sm" | "md" | "lg" | "store";
  rounded?: "md" | "lg" | "full" | "none" | "md-r" | "md-l";
  type?: "submit" | "button";
  className?: string;
}
export default function Button({
  children,
  color = "white",
  icon = false,
  size = "sm",
  type = "button",
  rounded = "md",
  className,
}: Props) {
  let sizeStyles: string = "";
  let colorStyles: string = "";
  let roundedStyles: string = "";
  switch (color) {
    case "white-outline":
      colorStyles = "border border-white text-white px-7";
      break;
    case "white":
      colorStyles = "text-white";
      break;
    case "primery":
      colorStyles = "bg-primary text-white";
      break;
  }
  switch (size) {
    case "sm":
      sizeStyles = "text-sm py-2 px-3";
      break;
  }
  switch (rounded) {
    case "md":
      roundedStyles = "rounded-md";
      break;
    case "md-l":
      roundedStyles = "rounded-l-md ";
      break;
    case "md-r":
      roundedStyles = "rounded-r-md ";
      break;
    case "none":
      roundedStyles = "";
      break;
  }
  switch (icon) {
    case true:
      return (
        <button
          type={type}
          className={` ${className} ${sizeStyles} ${colorStyles} ${roundedStyles}   shadow}`}
        >
          <div className="flex justify-center items-center">{children}</div>
        </button>
      );

    default:
      return (
        <button
          type={type}
          className={` ${className}   ${sizeStyles} ${colorStyles}  ${roundedStyles}  shadow}`}
        >
          {children}
        </button>
      );
  }
}
