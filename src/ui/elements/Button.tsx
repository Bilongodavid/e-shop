interface Props {
  children: React.ReactNode;
  outline: boolean;
  color?: "primery" | "white";
  icon?: boolean;
  rounded?: "full" | "md";
  size?: "sm" | "md" | "lg" | "store";
  type?: "submit" | "button";
  className?: string;
}
export default function Button({
  children,
  outline = false,
  color = "white",
  icon = false,
  rounded,
  size = "sm",
  type = "button",
  className,
}: Props) {
  let sizeStyles: string = "";
  switch (size) {
    case "sm":
      sizeStyles = "text-sm font-bold py-2 px-3 text-sm font-bold";
      break;
  }
  switch (icon) {
    case true:
      return (
        <button
          type={type}
          className={` ${className} ${sizeStyles} bg-primary text-white  rounded-sm shadow}`}
        >
          <div className="flex justify-center items-center">{children}</div>
        </button>
      );

    default:
      return (
        <button
          type={type}
          className={` ${className} bg-primary text-white ${sizeStyles} rounded-md shadow}`}
        >
          {children}
        </button>
      );
  }
}
