import { ComponentProps } from "react";

import styles from "./DatePicker.module.scss";

type DatePickerProps = { disabled: boolean } & ComponentProps<"input">;

export const DatePicker = ({
  placeholder = "Enter Here",
  ...props
}: DatePickerProps) => {
  return (
    <div className={styles.field}>
      <input type="date" placeholder={placeholder} {...props} />
    </div>
  );
};
