import React from "react";
import Table from "../../components/Table";
import { TABLE_CONFIG } from "./constants";

function TableSeaction(props) {
  return <Table data={props.data} columns={TABLE_CONFIG} />;
}

export default TableSeaction;
