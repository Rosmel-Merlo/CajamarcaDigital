import { Input, InputOnChangeData, Label, useId } from "@fluentui/react-components"
import { PersonRegular } from "@fluentui/react-icons";
import "./InputComponent.css"
import { ChangeEvent } from "react";

interface IInputComponent {
    text: string
    onChange?: (ev: ChangeEvent<HTMLInputElement>, data: InputOnChangeData) => void;
}

const InputComponent = (props: IInputComponent) => {
    const beforeId = useId("content-before");

    return (
        <div className="inputComponet-contenedor">
            <Label htmlFor={beforeId}>{props.text}</Label>
            <Input onChange={props.onChange} contentBefore={<PersonRegular />} id={beforeId} />
        </div>
    )
}

export default InputComponent