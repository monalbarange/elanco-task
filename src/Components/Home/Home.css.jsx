/* default style for component */
export const style = {
  headText: {
    fontSize: "50px",
    color: "#020067",
  },
  
  container: {
    textAlign: "center",
    padding: "5px",
  },
  heading: {
    marginTop: "25px",
    color: "#020067",
    textDecoration: "underline",
  },
  link: {
    textDecoration: "none",
    alignIitems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "red",
  },
  appItem: {
    border: "2px solid orange",
    height: "40vh",
    width: "23vw",
    margin: "20% 35%",
    boxShadow: "5px 6px 10px 4px lightgrey",
    borderRadius: "40px",
    "&: hover": {
      transform: "scale(1.1)",
    },
  },
  resItem: {
    border: "2px solid orange",
    height: "40vh",
    width: "23vw",
    margin: "20% 14%",
    boxShadow: "5px 6px 10px 4px lightgrey",
    borderRadius: "40px",
    "&: hover": {
      transform: "scale(1.1)",
    },
  },
};
