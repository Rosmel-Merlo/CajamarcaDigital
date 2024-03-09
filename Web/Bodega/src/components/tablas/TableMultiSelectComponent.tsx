import { Spinner, Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, TableSelectionCell } from '@fluentui/react-components';
import React, { useEffect, useState } from 'react';
import { IColumn } from '../../interfaces/ITableComponent/ITableComponent';
import { ButtonsGroupTabla } from '../buttonsGroup/ButtonsGroupTabla';
import { IButtonGroup } from '../../interfaces/IButtonsGroup/IButtonGroup';
import { useStyles } from "../../styles/LabelFontSyles";

interface ITableMultiSelectComponent {
    column: IColumn[];
    data: any[];
    isLoading: boolean;
    leftButtons: IButtonGroup[];
    rightButton?: IButtonGroup[];
    rowSeleted?: (item) => void
}

export const TableMultiSelectComponent = (props: ITableMultiSelectComponent) => {
    const styles = useStyles();

    const [selectedRows, setSelectedRows] = useState<any[]>([]);
    const [selectAllRows, setSelectAllRows] = useState<'mixed' | boolean>("mixed");

    const toggleRowSelection = (row: any) => {
        const index = selectedRows.findIndex(selectedRow => selectedRow.dispositivoId === row.dispositivoId);
        if (index !== -1) {
            setSelectedRows(prevSelectedRows => prevSelectedRows.filter((_, i) => i !== index));
        } else {
            setSelectedRows(prevSelectedRows => [...prevSelectedRows, row]);
        }
    };
    useEffect(() => {
        props.rowSeleted(selectedRows)
    }, [selectedRows])
    return (
        <>
            <div>
                <ButtonsGroupTabla
                    leftButtons={props.leftButtons}
                    rightButton={props.rightButton}
                    isSearch={true}
                />
            </div>
            <div>
                <Table size={"small"} role="grid" noNativeElements={true}>
                    <TableHeader>
                        <TableRow>
                            <TableSelectionCell
                                checked={selectAllRows}
                                onClick={(e) => { setSelectAllRows(e.target.checked ? true : e.target.checked === false ? false : 'mixed'); }}
                                checkboxIndicator={{ "aria-label": "Select all rows " }}
                            />
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
                                    <span className={styles.textCabecera}>{column.name}</span>
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
                                {props.data.map((item: any, indexItem: number) => (

                                    <TableRow appearance="none" key={indexItem}>
                                        <TableSelectionCell
                                            checked={!!selectedRows.find(selectedRow => selectedRow.dispositivoId === item.dispositivoId)}
                                            onChange={() => toggleRowSelection(item)}
                                            checkboxIndicator={{ "aria-label": "Select row" }}
                                        />
                                        {props.column.map((column: IColumn) => (
                                            <TableCell
                                                key={column.key}
                                                style={{
                                                    minWidth: column.minWidth,
                                                    maxWidth: column.maxWidth ?? "auto",
                                                    padding: "0px 8px",
                                                }}
                                            >
                                                {column.onRender ? (
                                                    column.onRender(item, indexItem)
                                                ) : (
                                                    <span className={styles.textBody}>{item[column.fieldName]}</span>
                                                )}
                                            </TableCell>
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
            </div>
        </>
    );
};
