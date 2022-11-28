import { ChangeEvent, FormEvent } from "react";
import { TextEditor } from "components";
import { FormContextType } from "types/Form";

import styles from "./FormHeader.module.scss";

export type FormHeaderProps = {
  selectedId: string | null;
  handleClickForm: FormContextType["handleClickForm"];
  handleFormHeader: FormContextType["handleFormHeader"];
} & FormContextType["formDetail"]["header"];

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
        placeholder="Form title"
        defaultValue={title}
        onInput={(event: ChangeEvent<HTMLDivElement>) =>
          handleFormHeader("title", event)
        }
      />
      <TextEditor
        placeholder="Form description"
        defaultValue={description}
        onInput={(event: ChangeEvent<HTMLDivElement>) =>
          handleFormHeader("description", event)
        }
      />
      <div className={styles.indicator}></div>
      {selectedId === id && <div className={styles.highlight}></div>}
    </div>
  );
};
