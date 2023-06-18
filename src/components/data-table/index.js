import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function DataTable({ columns = [], rows = [] }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((col) => {
              return (
                <TableCell align={col?.align || "left"}>
                  {col?.headerName || null}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.length > 0 &&
            rows.map((row, index) => (
              <TableRow
                key={row["id"] || index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                {columns.map((col, i) => {
                  const { field, renderCell, align, width } = col;
                  const cellValue = renderCell
                    ? renderCell({ row }, index)
                    : row[field];
                  return (
                    <TableCell
                      align={align || "left"}
                      key={`data-table-${field}-${i}`}
                      sx={{ width: width, minWidth: width }}
                    >
                      {cellValue}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          {!rows?.length && (
            <TableRow>
              <TableCell
                sx={() => ({
                  textAlign: "center",
                  color: "#666",
                })}
              >
                Không có dữ liệu
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
