import * as React from "react";
import { useState, useEffect } from "react";
import Form from "./Components/Form";
import "bootstrap/dist/css/bootstrap.css";
import DataTabl from "./Components/DataTable";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Header from "../src/Components/Header";
function App() {
  const [alignment, setAlignment] = React.useState("showData");

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment);
    console.log(newAlignment);
  };
  return (
    <>
      <Header/>
      <div className="row">
        <div className="left-right-panel col-2"></div>
        <div className='col-8 main-container'>
          <div className="d-flex justify-content-center mt-3">
            <ToggleButtonGroup
              color="secondary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
              className="bg-light text-danger"

            >
              <ToggleButton value="dataTable">Show Data</ToggleButton>
              <ToggleButton value="addData">Add Data</ToggleButton>
            </ToggleButtonGroup>
          </div>
            <div className="mt-3">
              {alignment == "addData" ? <Form /> : <DataTabl />}
            </div>
        </div>
        <div className="left-right-panel col-2"></div>
      </div>
    </>
  );
}

export default App;
