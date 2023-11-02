import React, { useEffect, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";
import { style } from "./Applications.css";
import SelectedApplication from "../Applications/SelectedApplication.component";
import { useNavigate } from "react-router-dom";

const Applications = () => {
  const [applications, setApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [filteredApplications, setFilteredApplications] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // this useEffect is for get applications name from api
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch(
          "https://engineering-task.elancoapps.com/api/applications"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setApplications(data);
        setFilteredApplications(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchApplications();
  }, []);

// this funtion is for get details of application
  const handleItemClick = async (application) => {
    try {
      const response = await fetch(
        `https://engineering-task.elancoapps.com/api/applications/${application}`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSelectedApplication(data);
      setShow(true);
      navigate(`/applications/selected/${application}`); // Navigate to the selected application page
    } catch (error) {
      console.error(
        "There was a problem fetching the specific application:",
        error
      );
    }
  };

  // this function is for searching and filtering the application name
  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = applications.filter((app) =>
        app.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredApplications(filtered);
    } else {
      setFilteredApplications(applications);
    }
  };

  return (
    <Box data-testid="applications-component">
      {show ? (
        <SelectedApplication selectedApplication={selectedApplication} />
      ) : (
        <Box >
          <Typography variant="h3" sx={style.heading}>
            All Applications
          </Typography>
          <Box>
            <Box sx={style.searchBox}>
              <TextField
                label="Search Applications"
                variant="outlined"
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
                inputProps={{ "data-testid": "search-input" }}
                sx={style.searchField}
              />
            </Box>
            <Box
              sx={style.applicationBox}
              role="list"
              data-testid="application-list"
            >
              {filteredApplications.map((application, index) => (
                <Typography
                  key={index}
                  onClick={() => handleItemClick(application)}
                  role="listitem"
                  data-testid={`application-item-${index}`}
                  sx={style.appText}
                >
                  {application}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Applications;
