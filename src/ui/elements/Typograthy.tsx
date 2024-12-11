interface Props {
  children: React.ReactNode;
  component?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  size?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "btn-text"
    | "mobile-menu"
    | "paragraph"
    | "list"
    | "link";
  className?: string;
  color?: "primary" | "second" | "black" | "danger";
}
export default function Typograthy({
  children,
  component: Component = "p",
  size = "paragraph",
  className,
  color = "black",
}: Props) {
  let sizeStyles: string = "";
  let colorStyles: string = "";

  switch (color) {
    case "black":
      colorStyles = "text-black";
      break;

    case "second":
      colorStyles = "text-second";
      break;
    case "primary":
      colorStyles = "text-primary";
      break;
    case "danger":
      colorStyles = "text-danger";
      break;
  }
  switch (size) {
    case "h1":
      sizeStyles = "text-4xl font-extrabold";
      break;

    case "h2":
      sizeStyles = "text-3xl font-bold";
      break;
    case "h3":
      sizeStyles = "text-2xl font-bold";
      break;
    case "h4":
      sizeStyles = "text-xl font-medium";
      break;
    case "h5":
      sizeStyles = "text-xl font-bold";
      break;
    case "h6":
      sizeStyles = "text-sm font-semibold";
      break;
    case "btn-text":
      sizeStyles = "text-sm font-bold";
      break;
    case "link":
      sizeStyles = "text-sm font-medium";
      break;
    case "list":
      sizeStyles = "text-lg font-medium";
      break;
    case "mobile-menu":
      sizeStyles = "text-2xl font-medium";
      break;
    case "paragraph":
      sizeStyles = "text-lg font-medium";
      break;
  }
  return (
    <Component
      className={`${size}   ${className} ${sizeStyles} ${colorStyles}`}
    >
      {children}
    </Component>
  );
}
