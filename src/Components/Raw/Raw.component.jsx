// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Typography,
//   TextField,
//   Button,
//   TablePagination,
//   TableSortLabel,
// } from "@mui/material";
// import { style } from "./Raw.css";
// import { useNavigate } from "react-router-dom";

// const Raw = () => {
//   const [raw, setRaw] = useState([]);
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(30);
//   const [orderBy, setOrderBy] = useState("");
//   const [order, setOrder] = useState("asc");
//   const navigate = useNavigate();
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     const fetchRawData = async () => {
//       try {
//         const response = await fetch(
//           "https://engineering-task.elancoapps.com/api/raw"
//         );
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         const data = await response.json();
//         setRaw(data);
//       } catch (error) {
//         console.error("There was a problem fetching the data:", error);
//       }
//     };

//     fetchRawData();
//   }, []);

//   const handleRequestSort = (property) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//   };

//   const sortedData = orderBy
//     ? [...raw].sort((a, b) => {
//         const compare = (a, b) => {
//           if (a < b) return -1;
//           if (a > b) return 1;
//           return 0;
//         };

//         if (order === "asc") {
//           return compare(a[orderBy], b[orderBy]);
//         } else {
//           return compare(b[orderBy], a[orderBy]);
//         }
//       })
//     : raw;

//   const filteredData = sortedData.filter((app) => {
//     const searchTextLower = searchText.toLowerCase();
//     for (const key in app) {
//       if (
//         app[key] &&
//         app[key].toString().toLowerCase().includes(searchTextLower)
//       ) {
//         return true;
//       }
//     }
//     return false;
//   });

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(parseInt(event.target.value, 10));
//     setPage(0);
//   };

//   const handleGoBack = () => {
//     navigate("/");
//   };

//   return (
//     <Box>
//       <Typography variant="h3" sx={style.heading}>
//         All Raw Data
//       </Typography>
//       <TextField
//         variant="outlined"
//         placeholder="Search data"
//         onChange={(e) => setSearchText(e.target.value)}
//         sx={style.searchField}
//         data-testid="search-field"
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
//         <TableContainer component={Paper} sx={style.tableContainer}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "InstanceId"}
//                     direction={orderBy === "InstanceId" ? order : "asc"}
//                     onClick={() => handleRequestSort("InstanceId")}
//                     data-testid="instanceId-sort-label"
//                   >
//                     Instance Id
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "ConsumedQuantity"}
//                     direction={orderBy === "ConsumedQuantity" ? order : "asc"}
//                     onClick={() => handleRequestSort("ConsumedQuantity")}
//                     data-testid="consumedQuantity-sort-label"
//                   >
//                     Consumed Quantity
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "Cost"}
//                     direction={orderBy === "Cost" ? order : "asc"}
//                     onClick={() => handleRequestSort("Cost")}
//                     data-testid="cost-sort-label"
//                   >
//                     Cost
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "Date"}
//                     direction={orderBy === "Date" ? order : "asc"}
//                     onClick={() => handleRequestSort("Date")}
//                     data-testid="date-sort-label"
//                   >
//                     Date
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "MeterCategory"}
//                     direction={orderBy === "MeterCategory" ? order : "asc"}
//                     onClick={() => handleRequestSort("MeterCategory")}
//                     data-testid="meterCategory-sort-label"
//                   >
//                     Meter Category
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "ResourceGroup"}
//                     direction={orderBy === "ResourceGroup" ? order : "asc"}
//                     onClick={() => handleRequestSort("ResourceGroup")}
//                     data-testid="resourceGroup-sort-label"
//                   >
//                     Resource Group
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "ResourceLocation"}
//                     direction={orderBy === "ResourceLocation" ? order : "asc"}
//                     onClick={() => handleRequestSort("ResourceLocation")}
//                     data-testid="resourceLocation-sort-label"
//                   >
//                     Resource Location
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "UnitOfMeasure"}
//                     direction={orderBy === "UnitOfMeasure" ? order : "asc"}
//                     onClick={() => handleRequestSort("UnitOfMeasure")}
//                     data-testid="unitOfMeasure-sort-label"
//                   >
//                     Unit Of Measure
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "Location"}
//                     direction={orderBy === "Location" ? order : "asc"}
//                     onClick={() => handleRequestSort("Location")}
//                     data-testid="location-sort-label"
//                   >
//                     Location
//                   </TableSortLabel>
//                 </TableCell>
//                 <TableCell sx={style.tableCell}>
//                   <TableSortLabel
//                     active={orderBy === "ServiceName"}
//                     direction={orderBy === "ServiceName" ? order : "asc"}
//                     onClick={() => handleRequestSort("ServiceName")}
//                     data-testid="serviceName-sort-label"
//                   >
//                     Service Name
//                   </TableSortLabel>
//                 </TableCell>{" "}
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
//                 <TableRow
//                   key={index}
//                   sx={style.tableRow}
//                   data-testid={`table-row-${index}`}
//                   role={`table-row-${index}`}
//                 >
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`instanceId-${index}`}
//                   >
//                     {app.InstanceId}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`consumedQuantity-${index}`}
//                   >
//                     {app.ConsumedQuantity}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`cost-${index}`}
//                   >
//                     {app.Cost}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`date-${index}`}
//                   >
//                     {app.Date}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`meterCategory-${index}`}
//                   >
//                     {app.MeterCategory}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`resourceGroup-${index}`}
//                   >
//                     {app.ResourceGroup}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`resourceLocation-${index}`}
//                   >
//                     {app.ResourceLocation}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`unitOfMeasure-${index}`}
//                   >
//                     {app.UnitOfMeasure}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`location-${index}`}
//                   >
//                     {app.Location}
//                   </TableCell>
//                   <TableCell
//                     sx={style.tableContent}
//                     data-testid={`serviceName-${index}`}
//                   >
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
//           aria-label="rows per page"
//           sx={style.pagination}
//         />
//       )}
//     </Box>
//   );
// };

// export default Raw;

import React, { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  TextField,
  Button,
  TablePagination,
  TableSortLabel,
} from "@mui/material";
import { style } from "./Raw.css";
import { useNavigate } from "react-router-dom";

const Raw = () => {
  const [raw, setRaw] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(30);
  const [orderBy, setOrderBy] = useState("");
  const [order, setOrder] = useState("asc");
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchRawData = async () => {
      try {
        const response = await fetch(
          "https://engineering-task.elancoapps.com/api/raw"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setRaw(data);
      } catch (error) {
        console.error("There was a problem fetching the data:", error);
      }
    };

    fetchRawData();
  }, []);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const sortedData = orderBy
    ? [...raw].sort((a, b) => {
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
    : raw;

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
    navigate("/");
  };

  return (
    <Box>
      <Typography variant="h3" sx={style.heading}>
        All Raw Data
      </Typography>
      <TextField
        variant="outlined"
        placeholder="Search data"
        onChange={(e) => setSearchText(e.target.value)}
        sx={style.searchField}
        data-testid="search-field"
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
        <TableContainer component={Paper} sx={style.tableContainer}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "InstanceId"}
                    direction={orderBy === "InstanceId" ? order : "asc"}
                    onClick={() => handleRequestSort("InstanceId")}
                    data-testid="instanceId-sort-label"
                  >
                    Instance Id
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "ConsumedQuantity"}
                    direction={orderBy === "ConsumedQuantity" ? order : "asc"}
                    onClick={() => handleRequestSort("ConsumedQuantity")}
                    data-testid="consumedQuantity-sort-label"
                  >
                    Consumed Quantity
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "Cost"}
                    direction={orderBy === "Cost" ? order : "asc"}
                    onClick={() => handleRequestSort("Cost")}
                    data-testid="cost-sort-label"
                  >
                    Cost
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "Date"}
                    direction={orderBy === "Date" ? order : "asc"}
                    onClick={() => handleRequestSort("Date")}
                    data-testid="date-sort-label"
                  >
                    Date
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "MeterCategory"}
                    direction={orderBy === "MeterCategory" ? order : "asc"}
                    onClick={() => handleRequestSort("MeterCategory")}
                    data-testid="meterCategory-sort-label"
                  >
                    Meter Category
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "ResourceGroup"}
                    direction={orderBy === "ResourceGroup" ? order : "asc"}
                    onClick={() => handleRequestSort("ResourceGroup")}
                    data-testid="resourceGroup-sort-label"
                  >
                    Resource Group
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "ResourceLocation"}
                    direction={orderBy === "ResourceLocation" ? order : "asc"}
                    onClick={() => handleRequestSort("ResourceLocation")}
                    data-testid="resourceLocation-sort-label"
                  >
                    Resource Location
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "UnitOfMeasure"}
                    direction={orderBy === "UnitOfMeasure" ? order : "asc"}
                    onClick={() => handleRequestSort("UnitOfMeasure")}
                    data-testid="unitOfMeasure-sort-label"
                  >
                    Unit Of Measure
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "Location"}
                    direction={orderBy === "Location" ? order : "asc"}
                    onClick={() => handleRequestSort("Location")}
                    data-testid="location-sort-label"
                  >
                    Location
                  </TableSortLabel>
                </TableCell>
                <TableCell sx={style.tableCell}>
                  <TableSortLabel
                    active={orderBy === "ServiceName"}
                    direction={orderBy === "ServiceName" ? order : "asc"}
                    onClick={() => handleRequestSort("ServiceName")}
                    data-testid="serviceName-sort-label"
                  >
                    Service Name
                  </TableSortLabel>
                </TableCell>{" "}
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
                <TableRow
                  key={index}
                  sx={style.tableRow}
                  data-testid={`table-row-${index}`}
                  role={`table-row-${index}`}
                >
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`instanceId-${index}`}
                  >
                    {app.InstanceId}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`consumedQuantity-${index}`}
                  >
                    {app.ConsumedQuantity}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`cost-${index}`}
                  >
                    {app.Cost}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`date-${index}`}
                  >
                    {app.Date}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`meterCategory-${index}`}
                  >
                    {app.MeterCategory}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`resourceGroup-${index}`}
                  >
                    {app.ResourceGroup}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`resourceLocation-${index}`}
                  >
                    {app.ResourceLocation}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`unitOfMeasure-${index}`}
                  >
                    {app.UnitOfMeasure}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`location-${index}`}
                  >
                    {app.Location}
                  </TableCell>
                  <TableCell
                    sx={style.tableContent}
                    data-testid={`serviceName-${index}`}
                  >
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
          aria-label="rows per page"
          sx={style.pagination}
        />
      )}
    </Box>
  );
};

export default Raw;
