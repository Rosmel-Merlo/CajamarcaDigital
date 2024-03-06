export interface IColumn {
  key: number;
  name: string;
  fieldName: string;
  onRender?: (item?: any, index?: number, column?: IColumn) => any;
  minWidth: number;
  maxWidth?: number;
}
