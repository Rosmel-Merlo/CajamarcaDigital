export interface IColumn {
  key: number;
  name: string;
  fieldName: string;
  minWidth: number;
  maxWidth?: number;
  onRender?: (item?: any, index?: number, column?: IColumn) => any;
}
