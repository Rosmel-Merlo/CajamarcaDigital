import {
  useId,
  Option,
  Combobox,
  OptionOnSelectData,
  SelectionEvents,
} from "@fluentui/react-components";
import { IOptionsComboBox } from "./IComboBox";

interface IComboBoxProps {
  text: string;
  placeHolder?: string;
  options: IOptionsComboBox[];
  onChange?: (event: SelectionEvents, data: OptionOnSelectData) => void;
}
export const ComboBoxComponent = (props: IComboBoxProps) => {
  const comboId = useId("combo-default");

  return (
    <div>
      <label id={comboId}>{props.text}</label>
      <Combobox
        key={comboId}
        aria-labelledby={comboId}
        placeholder={props.placeHolder}
        onOptionSelect={props.onChange}
      >
        {props.options.map((data, index) => (
          <Option key={index} text={data.text} value={data.key}>
            {data.text}
          </Option>
        ))}
      </Combobox>
    </div>
  );
};
