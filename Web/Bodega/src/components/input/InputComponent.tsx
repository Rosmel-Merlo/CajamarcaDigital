import {
  Field,
  Input,
  InputOnChangeData,
  Slot,
  useId,
} from "@fluentui/react-components";
import "./InputComponent.css";
import { ChangeEvent } from "react";

interface IInputComponent {
  text: string;
  error?: string | undefined;
  onChange?: (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
  value?: string | number;
  Icon?: Slot<"span">;
  type?:
    | "text"
    | "email"
    | "password"
    | "search"
    | "tel"
    | "url"
    | "date"
    | "datetime-local"
    | "month"
    | "number"
    | "time"
    | "week";
}

const InputComponent = (props: IInputComponent) => {
  const inputId = useId("input");
  const errorId = useId("error-message");

  const hasError = Boolean(props.error && props.error.trim().length > 0);
  return (
    <Field
      label={props.text}
      validationState={props.error ? "error" : "none"}
      validationMessage={props.error}
    >
      <Input
        id={inputId}
        aria-invalid={hasError}
        aria-describedby={hasError ? errorId : undefined}
        onChange={props.onChange}
        value={props.value == undefined ? "" : props.value.toString()}
        contentBefore={props.Icon}
        type={props.type}
      />
    </Field>
  );
};

export default InputComponent;
