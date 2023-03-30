import axios from "axios";
import React from "react";
import { postData } from "../actions/actions";

function Form(props) {
  const handleClick = () => {
    postData();
  };
  const arr = [];
  return (
    <div className="container-fluid row form-container">
      <hr />
      <div className="col-4">
        <label htmlFor="">Brand Name:</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Brand Name"
        />
        <label htmlFor="">Mobile Name:</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Mobile name"
        />
        <label htmlFor="">Model Number :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Model number"
        />
        <label htmlFor="">Price :</label>
        <input type="text" className="form-control w-100" placeholder="Price" />
        <label htmlFor="">Ram :</label>
        <input type="text" className="form-control w-100" placeholder="Ram" />
        <label htmlFor="">Storage :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Storage"
        />
        <label htmlFor="">Rear Camera :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Rear camera"
        />
        <label htmlFor="">Front Camera :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Front Camera"
        />
        <label htmlFor="">Processor :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Processor"
        />
      </div>
      <div className="col-4">
        <label htmlFor="">Battery Capacity :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Battery Capacity"
        />
        <label htmlFor="">Charging Power :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Charging Power"
        />
        <label htmlFor="">Sim :</label>
        <input type="text" className="form-control w-100" placeholder="Sim" />
        <label htmlFor="">Sim Type :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Sim Type"
        />
        <label htmlFor="">Display Size :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Display Size"
        />
        <label htmlFor="">Resolution :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Resolution"
        />
        <label htmlFor="">Resolution Type :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Resolution Type"
        />
        <label htmlFor="">Operating System :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Operating System"
        />
        <label htmlFor="">Processor Core :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Processor Core"
        />
      </div>
      <div className="col-4">
        <label htmlFor="">Network Type :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Display Size"
        />
        <label htmlFor="">Bluetooth Version :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Bluetooth Version"
        />
        <label htmlFor="">Sensors :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Sensors"
        />
        <label htmlFor="">Wi-fi Version :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Wi-fi Version"
        />
        <label htmlFor="">Warranty :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Warranty"
        />
        <label htmlFor="">Photos :</label>
        <input type="file" className="form-control w-100" />
        <label htmlFor="">Colors :</label>
        <input
          type="text"
          className="form-control w-100"
          placeholder="Enter colors by using comma (,)"
        />
        <input
          className="form-check-input me-2 mt-4"
          type="checkbox"
          value=""
          id="bluetooth"
        />
        <label class="form-check-label me-3" for="bluetooth" className="mt-3">
          Bluetooth
        </label>
        <input
          className="form-check-input ms-2 mt-4"
          type="checkbox"
          value=""
          id="flexCheckDefault"
        />
        <label
          class="form-check-label"
          for="flexCheckDefault"
          className="mt-3 ms-2"
        >
          Quick Charging
        </label>
        <div>
          <input
            className="form-check-input me-2 mt-4"
            type="checkbox"
            value=""
            id="wifi"
          />
          <label class="form-check-label" for="wifi" className="mt-3">
            Wi-Fi
          </label>
        </div>
      </div>
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Submit
      </button>
    </div>
  );
}

export default Form;
