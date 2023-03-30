import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function DataTabl() {
  const [MobileData, setMobileData] = React.useState();

  const getDataFromServer = () => {
    axios.get("http://localhost:3006/api/getall").then((response) => {
      setMobileData(response.data);
    });
  };
  const actionBodyTemplate = (rowData) => {
    return (
      <div className="">
        <EditIcon
          sx={{ cursor: "pointer" }}
          onClick={handleEditClick(rowData)}
        />{" "}
        |
        <DeleteIcon
          sx={{ cursor: "pointer", color: "red" }}
          onClick={handleDeleteClick(rowData)}
        />
      </div>
    );
  };
  const handleDeleteClick = (rowData) => {
    console.log(rowData);
  };
  const handleEditClick = (rowData) => {};
  React.useEffect(() => {
    getDataFromServer();
  }, []);

  return (
    <div className="card">
      <DataTable
        value={MobileData}
        removableSort
        tableStyle={{ minWidth: "100%",}}
      >
        <Column field="brandName" header="Brand Name" sortable ></Column>
        <Column field="name" header="Mobile name" sortable></Column>
        <Column field="modelNumber" header="Model number" sortable></Column>
        <Column field="price" header="Price" sortable></Column>
        <Column body={actionBodyTemplate} header="Action"></Column>
      </DataTable>
    </div>
  );
}

export default DataTabl;
