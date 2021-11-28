import Table from "../../components/Table";

export const TABLE_CONFIG = [
  {
    Header: "Label",
    accessor: "label"
  },
  {
    Header: "Value",
    accessor: "value",
    Cell: Table.ValueInputRenderer
  }
];
