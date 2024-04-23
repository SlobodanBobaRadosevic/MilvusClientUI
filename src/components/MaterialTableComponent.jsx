import React, { useState } from "react";
import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  TableFooter,
  Button,
  Grid,
  Container,
  TablePagination,
} from "@mui/material";

const MaterialTable = ({ columns, data }) => {
  const [search, setSearch] = useState({});
  const [globalSearch, setGlobalSearch] = useState("");
  const [globalSearchInput, setGlobalSearchInput] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleSearchChange = (e, columnName) => {
    setSearch({
      ...search,
      [columnName]: e.target.value,
    });
  };

  const handleGlobalSearchChange = (e) => {
    setGlobalSearchInput(e.target.value);
  };

  const handleSearch = () => {
    setGlobalSearch(globalSearchInput);
  };

  const handleClearSearch = () => {
    setSearch({});
    setGlobalSearch("");
    setGlobalSearchInput("");
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredRows = data.filter((row) => {
    return (
      (Object.keys(search).length === 0 || // If no column-specific search terms are set
        Object.keys(search).every(
          (
            key // Or all column-specific search terms match
          ) =>
            row[key]
              .toString()
              .toLowerCase()
              .includes(search[key].toLowerCase())
        )) &&
      // And global search term matches any column
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(globalSearch.toLowerCase())
      )
    );
  });

  return (
    <Container className="custom-container" component={Paper}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={6}>
          <TextField
            label="Global Search"
            value={globalSearchInput}
            onChange={handleGlobalSearchChange}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <Grid container spacing={2}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSearch}
              >
                Search
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleClearSearch}
              >
                Clear All
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>{column.label}</TableCell>
              ))}
            </TableRow>
            <TableRow>
              {columns.map((column) => (
                <TableCell key={column.id}>
                  <TextField
                    label={`Search ${column.label}`}
                    value={search[column.id] || ""}
                    onChange={(e) => handleSearchChange(e, column.id)}
                    fullWidth
                  />
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  {columns.map((column) => (
                    <TableCell key={column.id}>{row[column.id]}</TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                colSpan={columns.length}
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default MaterialTable;
