/* default style for component */
export const style = {
  heading: {
    marginTop: "25px",
    color: "#020067",
    textDecoration: "underline",
    textAlign: "center",
  },

  searchField: {
    width: "20vw",
    float : "left",
    ml: 5,
    "& .MuiInputBase-root-MuiOutlinedInput-root": {
      height: "3vh",
    },
  },

  resourcesName: {
    textAlign: "center",
  },

  tableContainer: {
    margin: "4% auto",
    width: "95vw",
    border: "1px solid #020067",
  },
  tableCell: {
    fontWeight: "bold",
    textAlign: "center",
    border: "1px solid #020067",
    fontSize: "20px",
    color: "#020067",
  },
  tableRow: {
    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  },
  tableContent: {
    textAlign: "center",
    border: "1px solid #020067",
    color: "orange",
    fontWeight: 550,
  },

  backBtn: {
    margin: "10px 40px",
    backgroundColor: "orange",
    width: "5vw",
    float: "right",
    "&:hover": {
      backgroundColor: "#020067",
    },
  },

  pagination: {
    color: "#020067",
  },

  notFound: {
    color: "#020067",
    textAlign: "center",
    fontSize: "40px",
    margin: "20% 20%"
  },
};
