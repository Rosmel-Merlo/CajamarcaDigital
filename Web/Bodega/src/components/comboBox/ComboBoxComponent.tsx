import {
  useId,
  Option,
  Combobox,
  OptionOnSelectData,
  SelectionEvents,
  Field,
} from "@fluentui/react-components";
import { IOptionsComboBox } from "./IComboBox";
import { useEffect, useState } from "react";

interface IComboBoxProps {
  text: string;
  placeHolder?: string;
  options: IOptionsComboBox[];
  defaultValue?: string;
  error?: string | undefined;
  onChange?: (event: SelectionEvents, data: OptionOnSelectData) => void;
}

export const ComboBoxComponent = (props: IComboBoxProps) => {
  const comboId = useId("combo-controlled");
  const [value, setValue] = useState<string | undefined>("");
  const [selectedOptions, setSelectedOptions] = useState<string[]>([
    props.defaultValue ?? "",
  ]);

  const onOptionSelect: (typeof props)["onChange"] = (ev, data) => {
    props.onChange?.(ev, data);
    setSelectedOptions(data.selectedOptions);
    setValue(data.optionText ?? "");
  };

  const onInput = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setValue(ev.target.value);
  };

  useEffect(() => {
    if (props.defaultValue) {
      props.options.map((data) => {
        if (data.key === props.defaultValue) {
          setValue(data.text);
          setSelectedOptions([data.key]);
        }
      });
    }
  }, [props.defaultValue]);
  const hasError = Boolean(props.error && props.error.trim().length > 0);

  return (
    <div>
      <Field
        label={props.text}
        validationState={props.error ? "error" : "none"}
        validationMessage={props.error}
      >
        <Combobox
          id={`${comboId}-controlled`}
          aria-invalid={hasError}
          value={value}
          selectedOptions={selectedOptions}
          onInput={onInput}
          onOptionSelect={onOptionSelect}
        >
          {props.options.map((data, index) => (
            <Option key={data.key} text={data.text} value={data.key}>
              {data.text}
            </Option>
          ))}
        </Combobox>
      </Field>
    </div>
  );
};
