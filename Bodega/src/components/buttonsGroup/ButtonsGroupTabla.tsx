import { Button, Field, InputOnChangeData } from "@fluentui/react-components";
import { IButtonGroup } from "../../interfaces/IButtonsGroup/IButtonGroup";
import { SearchBox } from "@fluentui/react-search-preview";
import { ChangeEvent } from "react";

interface IButtonsGroupTabla {
  isSearch?: boolean
  leftButtons: IButtonGroup[];
  rightButton?: IButtonGroup[];
  onChangeSearch?: (
    event: ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLSpanElement>,
    data: InputOnChangeData
  ) => void;
}

export const ButtonsGroupTabla = (props: IButtonsGroupTabla) => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "end",
          width: "100%",
        }}
      >
        <div key={"leftBotton"}>
          <div style={{ display: "flex" }}>
            {props.leftButtons.map((button, index) => (
              <Button
                key={index}
                onClick={button.onClick}
                style={{ fontSize: "12px", fontWeight: "normal" }}
                appearance={
                  button.type == undefined ? "transparent" : button.type
                }
                icon={button.icon}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>

        <div key={"rightBotton"}>
          <div style={{ display: "flex" }}>
            {props.isSearch == true ? (<div key="search" style={{ width: "300px", paddingBottom: "5px" }}>
              <Field>
                <SearchBox onChange={props.onChangeSearch} />
              </Field>
            </div>) : (<></>)}

            {props.rightButton?.map((button, index) => (
              <Button
                key={index}
                onClick={button.onClick}
                style={{ fontSize: "12px", fontWeight: "normal" }}
                appearance={
                  button.type == undefined ? "transparent" : button.type
                }
                icon={button.icon}
              >
                {button.text}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
