import {
  Input,
  InputOnChangeData,
  Label,
  Slot,
  useId,
} from "@fluentui/react-components";
import "./InputComponent.css";
import { ChangeEvent } from "react";

interface IInputComponent {
  text: string;
  onChange?: (
    ev: ChangeEvent<HTMLInputElement>,
    data: InputOnChangeData
  ) => void;
  Icon?: Slot<"span">;
}

const InputComponent = (props: IInputComponent) => {
  const beforeId = useId("content-before");

  return (
    <div className="inputComponet-contenedor">
      <Label htmlFor={beforeId}>{props.text}</Label>
      <Input
        onChange={props.onChange}
        contentBefore={props.Icon}
        id={beforeId}
      />
    </div>
  );
};

export default InputComponent;
