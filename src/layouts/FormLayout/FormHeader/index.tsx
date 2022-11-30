import { ChangeEvent } from "react";
import { FormTypes } from "types/Form";
import TextEditor from "components/TextEditor";

import styles from "./FormHeader.module.scss";

export type FormHeaderProps = {
  selectedId: string | null;
  handleClickForm: FormTypes["handleClickForm"];
  handleFormHeader: FormTypes["handleFormHeader"];
} & FormTypes["formDetail"]["header"];

export const FormHeader = ({
  id,
  title,
  description,
  selectedId,
  handleClickForm,
  handleFormHeader,
}: FormHeaderProps) => {
  return (
    <div className={styles.container} onClick={() => handleClickForm(id)}>
      <TextEditor
        as="h1"
        data-name="title"
        placeholder="Form title"
        defaultValue={title}
        onInput={(event: ChangeEvent<HTMLDivElement>) =>
          handleFormHeader(event)
        }
      />
      <TextEditor
        placeholder="Form description"
        defaultValue={description}
        data-name="description"
        onInput={(event: ChangeEvent<HTMLDivElement>) =>
          handleFormHeader(event)
        }
      />
      <div className={styles.indicator}></div>
      {selectedId === id && <div className={styles.highlight}></div>}
    </div>
  );
};