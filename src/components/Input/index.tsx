import { ComponentProps, FocusEvent, useRef } from "react";

import styles from "./Input.module.scss";

type InputProps = {} & ComponentProps<"input">;

export const Input = ({
  className,
  type = "text",
  placeholder = "Enter Here",
  onFocus,
  onBlur,
  ...props
}: InputProps) => {
  let inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = (event: FocusEvent<HTMLInputElement>): void => {
    inputRef.current?.classList.remove(styles.blur);
    inputRef.current?.classList.add(styles.focus);
    if (typeof onFocus === "function") onFocus(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement>): void => {
    inputRef.current?.classList.remove(styles.focus);
    inputRef.current?.classList.add(styles.blur);
    if (typeof onBlur === "function") onBlur(event);
  };

  return (
    <div ref={inputRef} className={styles.field}>
      <input
        type={type}
        placeholder={placeholder}
        className={`${styles.field} ${className || ""}`.trim()}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
    </div>
  );
};
