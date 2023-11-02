import React, { useEffect, useState } from "react";
import SelectedResources from "./SelectedResources.component";
import { Box, Typography } from "@mui/material";
import { style } from "./Resources.css";
import { useNavigate } from 'react-router-dom';

const Resources = () => {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  // this useEffect is for get resources name from api
  useEffect(() => {
    const fetchResources = async () => {
      try {
        const response = await fetch("https://engineering-task.elancoapps.com/api/resources");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setResources(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchResources();
  }, []);

  // this funtion is for get details of resources
  const handleSelectResource = async (resourceName) => {
    try {
      const response = await fetch(`https://engineering-task.elancoapps.com/api/resources/${resourceName}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setSelectedResource(data);
      setShow(true);
      navigate(`/resources/selected-resource/${resourceName}`);
    } catch (error) {
      console.error("There was a problem fetching the specific resource:", error);
    }
  };

  return (
    <Box data-testid="resources-component">
      {show ? (
        <SelectedResources selectedResource={selectedResource} />
      ) : (
        <Box>
          <Typography variant="h3" sx={style.heading}>
            All Resources
          </Typography>
          <Box sx={style.resourcesBox} role="list" data-testid="resource-list">
            {resources.map((resource, index) => (
              <Typography
                key={index}
                onClick={() => handleSelectResource(resource)}
                role="listitem"
                data-testid={`resource-item-${index}`}
                sx={style.resourceText}
              >
                {resource}
              </Typography>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Resources;