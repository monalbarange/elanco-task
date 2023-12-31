// import React, { useState, useEffect } from "react";
// import {
//   Box,
//   Paper,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Typography,
//   TablePagination,
//   TableSortLabel,
//   Button,
//   TextField,
// } from "@mui/material";
// import { style } from "./SelectedApplication.css";
// import { useNavigate, useParams } from "react-router-dom";

// const SelectedApplication = () => {
//   const [selectedApplication, setSelectedApplication] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(15);
//   const [orderBy, setOrderBy] = useState("");
//   const [order, setOrder] = useState("asc");
//   const [searchDate, setSearchDate] = useState(""); // State for search by date
//   const { applicationId } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchApplicationDetails = async () => {
//       try {
//         const response = await fetch(
//           `https://engineering-task.elancoapps.com/api/applications/${applicationId}`
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setSelectedApplication(data);
//       } catch (error) {
//         console.error(
//           "There was a problem fetching the specific application:",
//           error
//         );
//       }
//     };

//     fetchApplicationDetails();
//   }, [applicationId]);

//   const handleRequestSort = (property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const filteredData = selectedApplication.filter((app) => {
//     return app.Date.includes(searchDate);
//   });

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleGoBack = () => {
//     navigate("/applications");
//   };

//   return (
//     <Box>
//       <Typography variant="h3" sx={style.heading}>
//         Selected Application Details
//       </Typography>
//       <TextField
//         variant="outlined"
//         placeholder="Search application by date"
//         onChange={(e) => setSearchDate(e.target.value)}
//         sx={style.searchField}
//       />
//       <Button
//         variant="contained"
//         onClick={handleGoBack}
//         sx={style.backBtn}
//         data-testid="back-button"
//       >
//         Back
//       </Button>
//       {filteredData.length > 0 && (
//         <TableContainer
//           component={Paper}
//           sx={style.tableContainer}
//           data-testid="table-container"
//         >
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "InstanceId"}
//                     direction={orderBy === "InstanceId" ? order : "asc"}
//                     onClick={() => handleRequestSort("InstanceId")}
//                   >
//                     Instance Id
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "ConsumedQuantity"}
//                     direction={orderBy === "ConsumedQuantity" ? order : "asc"}
//                     onClick={() => handleRequestSort("ConsumedQuantity")}
//                   >
//                     Consumed Quantity
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "Cost"}
//                     direction={orderBy === "Cost" ? order : "asc"}
//                     onClick={() => handleRequestSort("Cost")}
//                   >
//                     Cost
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "Date"}
//                     direction={orderBy === "Date" ? order : "asc"}
//                     onClick={() => handleRequestSort("Date")}
//                   >
//                     Date
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "MeterCategory"}
//                     direction={orderBy === "MeterCategory" ? order : "asc"}
//                     onClick={() => handleRequestSort("MeterCategory")}
//                   >
//                     Meter Category
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "ResourceGroup"}
//                     direction={orderBy === "ResourceGroup" ? order : "asc"}
//                     onClick={() => handleRequestSort("ResourceGroup")}
//                   >
//                     Resource Group
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "ResourceLocation"}
//                     direction={orderBy === "ResourceLocation" ? order : "asc"}
//                     onClick={() => handleRequestSort("ResourceLocation")}
//                   >
//                     Resource Location
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "UnitOfMeasure"}
//                     direction={orderBy === "UnitOfMeasure" ? order : "asc"}
//                     onClick={() => handleRequestSort("UnitOfMeasure")}
//                   >
//                     Unit Of Measure
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "Location"}
//                     direction={orderBy === "Location" ? order : "asc"}
//                     onClick={() => handleRequestSort("Location")}
//                   >
//                     Location
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "ServiceName"}
//                     direction={orderBy === "ServiceName" ? order : "asc"}
//                     onClick={() => handleRequestSort("ServiceName")}
//                   >
//                     Service Name
//                   </TableSortLabel>
//                 </TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {(rowsPerPage > 0
//                 ? filteredData.slice(
//                     page * rowsPerPage,
//                     page * rowsPerPage + rowsPerPage
//                   )
//                 : filteredData
//               ).map((app, index) => (
//                 <TableRow key={index} sx={style.tableRow}>
//                   <TableCell sx={style.tableContent}>
//                     {app.InstanceId}
//                   </TableCell>
//                   <TableCell sx={style.tableContent}>
//                     {app.ConsumedQuantity}
//                   </TableCell>
//                   <TableCell sx={style.tableContent}>{app.Cost}</TableCell>
//                   <TableCell sx={style.tableContent}>{app.Date}</TableCell>
//                   <TableCell sx={style.tableContent}>
//                     {app.MeterCategory}
//                   </TableCell>
//                   <TableCell sx={style.tableContent}>
//                     {app.ResourceGroup}
//                   </TableCell>
//                   <TableCell sx={style.tableContent}>
//                     {app.ResourceLocation}
//                   </TableCell>
//                   <TableCell sx={style.tableContent}>
//                     {app.UnitOfMeasure}
//                   </TableCell>
//                   <TableCell sx={style.tableContent}>{app.Location}</TableCell>
//                   <TableCell sx={style.tableContent}>
//                     {app.ServiceName}
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         </TableContainer>
//       )}
//       {filteredData.length > 0 && (
//         <TablePagination
//           rowsPerPageOptions={[5, 10, 25]}
//           component="div"
//           count={filteredData.length}
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//           data-testid="table-pagination"
//           sx={style.pagination}
//         />
//       )}
//     </Box>
//   );
// };

// export default SelectedApplication;

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
  TableSortLabel,
  Button,
  TextField,
} from "@mui/material";
import { style } from "./SelectedApplication.css";
import { useNavigate, useParams } from "react-router-dom";

const SelectedApplication = () => {
  const [selectedApplication, setSelectedApplication] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const [searchText, setSearchText] = useState("");
  const { applicationId } = useParams();
  const navigate = useNavigate();

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
        console.error(
          "There was a problem fetching the specific application:",
          error
        );
      }
    };

    fetchApplicationDetails();
  }, [applicationId]);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = orderBy
    ? [...selectedApplication].sort((a, b) => {
        const compare = (a, b) => {
          if (a < b) return -1;
          if (a > b) return 1;
          return 0;
        };

        if (order === "asc") {
          return compare(a[orderBy], b[orderBy]);
        } else {
          return compare(b[orderBy], a[orderBy]);
        }
      })
    : selectedApplication;

  const filteredData = sortedData.filter((app) => {
    const searchTextLower = searchText.toLowerCase();
    for (const key in app) {
      if (
        app[key] &&
        app[key].toString().toLowerCase().includes(searchTextLower)
      ) {
        return true;
      }
    }
    return false;
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleGoBack = () => {
    navigate("/applications");
  };

  return (
    <Box>
      <Typography variant="h3" sx={style.heading}>
        Selected Application Details
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search application"
        onChange={(e) => setSearchText(e.target.value)}
        sx={style.searchField}
      />
      <Button
        variant="contained"
        onClick={handleGoBack}
        sx={style.backBtn}
        data-testid="back-button"
      >
        Back
      </Button>
      {filteredData.length > 0 ? (
        <TableContainer
          component={Paper}
          sx={style.tableContainer}
          data-testid="table-container"
        >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "InstanceId"}
                    direction={orderBy === "InstanceId" ? order : "asc"}
                    onClick={() => handleRequestSort("InstanceId")}
                  >
                    Instance Id
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "ConsumedQuantity"}
                    direction={orderBy === "ConsumedQuantity" ? order : "asc"}
                    onClick={() => handleRequestSort("ConsumedQuantity")}
                  >
                    Consumed Quantity
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "Cost"}
                    direction={orderBy === "Cost" ? order : "asc"}
                    onClick={() => handleRequestSort("Cost")}
                  >
                    Cost
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "Date"}
                    direction={orderBy === "Date" ? order : "asc"}
                    onClick={() => handleRequestSort("Date")}
                  >
                    Date
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "MeterCategory"}
                    direction={orderBy === "MeterCategory" ? order : "asc"}
                    onClick={() => handleRequestSort("MeterCategory")}
                  >
                    Meter Category
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "ResourceGroup"}
                    direction={orderBy === "ResourceGroup" ? order : "asc"}
                    onClick={() => handleRequestSort("ResourceGroup")}
                  >
                    Resource Group
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "ResourceLocation"}
                    direction={orderBy === "ResourceLocation" ? order : "asc"}
                    onClick={() => handleRequestSort("ResourceLocation")}
                  >
                    Resource Location
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "UnitOfMeasure"}
                    direction={orderBy === "UnitOfMeasure" ? order : "asc"}
                    onClick={() => handleRequestSort("UnitOfMeasure")}
                  >
                    Unit Of Measure
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "Location"}
                    direction={orderBy === "Location" ? order : "asc"}
                    onClick={() => handleRequestSort("Location")}
                  >
                    Location
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "ServiceName"}
                    direction={orderBy === "ServiceName" ? order : "asc"}
                    onClick={() => handleRequestSort("ServiceName")}
                  >
                    Service Name
                  </TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? filteredData.slice(
                    page * rowsPerPage,
                    page * rowsPerPage + rowsPerPage
                  )
                : filteredData
              ).map((app, index) => (
                <TableRow key={index} sx={style.tableRow}>
                  <TableCell sx={style.tableContent}>
                    {app.InstanceId}
                  </TableCell>
                  <TableCell sx={style.tableContent}>
                    {app.ConsumedQuantity}
                  </TableCell>
                  <TableCell sx={style.tableContent}>{app.Cost}</TableCell>
                  <TableCell sx={style.tableContent}>{app.Date}</TableCell>
                  <TableCell sx={style.tableContent}>
                    {app.MeterCategory}
                  </TableCell>
                  <TableCell sx={style.tableContent}>
                    {app.ResourceGroup}
                  </TableCell>
                  <TableCell sx={style.tableContent}>
                    {app.ResourceLocation}
                  </TableCell>
                  <TableCell sx={style.tableContent}>
                    {app.UnitOfMeasure}
                  </TableCell>
                  <TableCell sx={style.tableContent}>{app.Location}</TableCell>
                  <TableCell sx={style.tableContent}>
                    {app.ServiceName}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        ) : (
          <Typography variant="h5" sx={style.notFound}>
            Data not found
          </Typography>
        )}
      {filteredData.length > 0 && (
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={filteredData.length}
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
