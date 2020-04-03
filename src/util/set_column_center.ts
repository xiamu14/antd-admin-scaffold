export default function setColumnCenter(columns: any) {
  return columns.map((column: any) => {
    // eslint-disable-next-line no-param-reassign
    column.align = "center";
    return column;
  });
}
