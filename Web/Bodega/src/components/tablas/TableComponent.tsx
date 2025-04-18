import { IColumn } from "../../interfaces/ITableComponent/ITableComponent";
import {
  InputOnChangeData,
  Label,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableCellLayout,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@fluentui/react-components";
import { useStyles } from "../../styles/LabelFontSyles";
import { IButtonGroup } from "../../interfaces/IButtonsGroup/IButtonGroup";
import { ChangeEvent, Fragment } from "react";
import { ButtonsGroupTabla } from "../buttonsGroup/ButtonsGroupTabla";
import { PanelMenu } from "../../routes/PanelMenu";
import { useBoolean } from "@fluentui/react-hooks";

interface ITableComponent {
  isSearch?: boolean;
  column: IColumn[];
  data: any[];
  isLoading: true | false;
  leftButtons: IButtonGroup[];
  rightButton?: IButtonGroup[];
  onChangeSearch?: (
    event: ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLSpanElement>,
    data: InputOnChangeData
  ) => void;
}

export const TableComponent = (props: ITableComponent) => {
  const styles = useStyles();

  return (
    <>
      <ButtonsGroupTabla leftButtons={props.leftButtons} />
      <Table size={"small"} aria-label="asdfasdfs" noNativeElements={true}>
        <TableHeader>
          <TableRow>
            {props.column.map((column: IColumn) => (
              <TableHeaderCell
                as="div"
                key={column.key}
                style={{
                  minWidth: column.minWidth,
                  maxWidth: column.maxWidth ?? "auto",
                  padding: "0px 8px",
                }}
              >
                <Label
                  className={styles.textCabecera}
                  weight="semibold"
                  size="medium"
                >
                  {column.name}
                </Label>
              </TableHeaderCell>
            ))}
          </TableRow>
        </TableHeader>

        <TableBody
          style={{
            minHeight: "100px",
            maxHeight: "72vh",
            overflowY: "scroll",
          }}
        >
          {!props.isLoading ? (
            <>
              {props.data?.map((item: any, indexItem: number) => (
                <TableRow appearance="none" key={indexItem}>
                  {props.column.map((column: IColumn) => (
                    <Fragment key={column.key}>
                      {column.onRender ? (
                        <TableCellLayout
                          key={"column.key"+indexItem}
                          style={{
                            minWidth: column.minWidth,
                            maxWidth: column.maxWidth ?? "auto",
                            padding: "0px 0px",
                          }}
                        >
                          {column.onRender(item, indexItem)}
                        </TableCellLayout>
                      ) : (
                        <>
                          <TableCell
                            key={column.key}
                            style={{
                              minWidth: column.minWidth,
                              maxWidth: column.maxWidth ?? "auto",
                              padding: "0px 8px",
                            }}
                          >
                            <Label className={styles.textBody} size="small">
                              {" "}
                              {item[column.fieldName]}{" "}
                            </Label>
                          </TableCell>
                        </>
                      )}
                    </Fragment>
                  ))}
                </TableRow>
              ))}
            </>
          ) : (
            <div
              style={{
                height: "100px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Spinner
                appearance="primary"
                size="extra-small"
                label="Obteniendo Información"
              />
            </div>
          )}
        </TableBody>
      </Table>
    </>
  );
};
