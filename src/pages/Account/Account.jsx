import "./Account.scss";
import "../Catalog/Catalog.scss";

import { BsPlusCircleDotted } from "react-icons/bs";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { useState } from "react";
import { Catalog } from "../../components";

const Account = () => {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="account">
      <div className="account-container">
        <Box sx={{ width: "100%", typography: "body1" }}>
          <TabContext value={value}>
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "rgb(201, 171, 129)",
                padding: "30px",
              }}
            >
              <TabList onChange={handleChange}>
                <Tab label="Catalog" value="1" />
                <Tab label="Products" value="2" />
                <Tab label="Customers" value="3" />
              </TabList>
            </Box>
            <div className="add-catalog">
              <button className="add-catalog-button">
                <BsPlusCircleDotted />
                Add Catalog
              </button>
            </div>
            <TabPanel value="1">
              <Catalog />
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel>
          </TabContext>
        </Box>
      </div>
      <div className="account-overlay"></div>
    </div>
  );
};

export default Account;
