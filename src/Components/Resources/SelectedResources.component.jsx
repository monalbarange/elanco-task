import React, { useEffect, useState } from "react";
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TablePagination,
  Button,
} from "@mui/material";
import { style } from "./SelectedResources.css";
import { useParams, useNavigate } from "react-router-dom";

const SelectedResources = () => {
  const [selectedResource, setSelectedResource] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const { resourceId } = useParams();
  const navigate = useNavigate();

  // this useEffect is for get details of resources
  useEffect(() => {
    const fetchResourceDetails = async () => {
      try {
        const response = await fetch(`https://engineering-task.elancoapps.com/api/resources/${resourceId}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSelectedResource(data);
      } catch (error) {
        console.error("There was a problem fetching the specific resource:", error);
      }
    };

    fetchResourceDetails();
  }, [resourceId]);

  // this function is for change the page in pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // this function is for change the page per row in pagination
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // this function is for navigate back to the 'Resource' page
  const handleBack = () => {
    navigate("/resources");
  };

  return (
    <Box>
      <Typography variant="h3" sx={style.heading}>
        Selected Resource Details
      </Typography>
      <Button
        variant="contained"
        onClick={handleBack}
        sx={style.backBtn}
        data-testid="back-button"
      >
        Back
      </Button>
      {selectedResource && selectedResource.length > 0 && (
        <TableContainer component={Paper} sx={style.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={style.tableCell}>Consumed Quantity</TableCell>
                <TableCell sx={style.tableCell}>Cost</TableCell>
                <TableCell sx={style.tableCell}>Date</TableCell>
                <TableCell sx={style.tableCell}>InstanceId</TableCell>
                <TableCell sx={style.tableCell}>MeterCategory</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? selectedResource.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : selectedResource
              ).map((app, index) => (
                <TableRow key={index} sx={style.tableRow}>
                  <TableCell sx={style.tableContent}>
                    {app.ConsumedQuantity}
                  </TableCell>
                  <TableCell sx={style.tableContent}>{app.Cost}</TableCell>
                  <TableCell sx={style.tableContent}>{app.Date}</TableCell>
                  <TableCell sx={style.tableContent}>
                    {app.InstanceId}
                  </TableCell>
                  <TableCell sx={style.tableContent}>
                    {app.MeterCategory}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      {selectedResource && selectedResource.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={selectedResource.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={style.pagination}
        />
      )}
    </Box>
  );
};

export default SelectedResources;
