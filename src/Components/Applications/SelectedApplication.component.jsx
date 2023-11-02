import React, { useState, useEffect } from "react";
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
import { style } from "./SelectedApplication.css";
import { useNavigate, useParams } from "react-router-dom";

const SelectedApplication = () => {
  const [selectedApplication, setSelectedApplication] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const { applicationId } = useParams();
  const navigate = useNavigate();

  // this useEffect is for get details of application
  useEffect(() => {
    const fetchApplicationDetails = async () => {
      try {
        const response = await fetch(
          `https://engineering-task.elancoapps.com/api/applications/${applicationId}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSelectedApplication(data);
      } catch (error) {
        console.error("There was a problem fetching the specific application:", error);
      }
    };

    fetchApplicationDetails();
  }, [applicationId]);

  // this function is for change the page in pagination
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // this function is for change the page per row in pagination
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // this function is for navigate back to the 'Applications' page
  const handleGoBack = () => {
    navigate("/applications"); 
  };

  return (
    <Box>
      <Typography variant="h3" sx={style.heading}>
        Selected Application Details
      </Typography>
      <Button
        variant="contained"
        onClick={handleGoBack}
        sx={style.backBtn}
        data-testid="back-button"
      >
        Back
      </Button>

      {selectedApplication && selectedApplication.length > 0 && (
        <TableContainer component={Paper} sx={style.tableContainer} data-testid="table-container">
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={style.tableCell} data-testid="consumed-quantity-cell">Consumed Quantity</TableCell>
                <TableCell sx={style.tableCell} data-testid="cost-cell">Cost</TableCell>
                <TableCell sx={style.tableCell} data-testid="date-cell">Date</TableCell>
                <TableCell sx={style.tableCell} data-testid="instance-id-cell">InstanceId</TableCell>
                <TableCell sx={style.tableCell} data-testid="meter-category-cell">MeterCategory</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? selectedApplication.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : selectedApplication
              ).map((app, index) => (
                <TableRow key={index}>
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
      {selectedApplication && selectedApplication.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={selectedApplication.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          data-testid="table-pagination"
          sx={style.pagination}
        />
      )}
    </Box>
  );
};

export default SelectedApplication;
