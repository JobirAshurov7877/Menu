import "./Calculator.scss";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useState } from "react";

const Calculator = () => {
  const [emount, setEmount] = useState(0);
  const emountValue = (e) => {
    console.log(e);
    if (!isNaN(e)) {
      const numberChange = parseInt(e);
      setEmount(numberChange);
      console.log(typeof numberChange);
    }
  };
  return (
    <div className="calculator">
      <div className="calculator-container">
        <div className="title text-center my-4 ">Calculator</div>
        <div className="tableBox d-flex flex-column justify-content-between">
          <div
            className="table-scroll"
            style={{ overflowY: "scroll", height: "550px" }}
          >
            <table className="calc-table table-bordered mt-0">
              <thead>
                <tr>
                  <th scope="col">Product name</th>
                  <th scope="col">Actions</th>
                  <th scope="col">Emount</th>
                  <th scope="col">Price </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pepsi</td>
                  <td className="d-flex">
                    <ButtonGroup
                      variant="outlined"
                      aria-label="outlined button group"
                      style={{ width: "100%" }}
                    >
                      <Button
                        style={{
                          border: "1px solid rgb(201, 171, 129)",
                          color: "#fff",
                        }}
                        className="w-50"
                      >
                        -
                      </Button>
                      <Button
                        style={{
                          border: "1px solid rgb(201, 171, 129)",
                          color: "#fff",
                        }}
                        className="w-50"
                      >
                        +
                      </Button>
                    </ButtonGroup>
                  </td>
                  <td className="text-center">
                    <input
                      className="text-center"
                      style={{
                        background: "transparent",
                        border: "0",
                        outline: "0",
                        color: "#fff",
                      }}
                      value={emount}
                      onChange={(e) => emountValue(e.target.value)}
                    />
                  </td>
                  <td className="text-center">10 000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="total__price d-flex align-items-center p-3">
            <p className="m-0">Total: 200 000</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
