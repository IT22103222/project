import React, { useState } from "react";
import Navigation from "../../Components/Navigation";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Confirmation from "../../Components/Confirmation";
import OrderEdit from "../../Components/EditModal";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

const options = ["PENDING", "PROCESSING", "CANCELED", "DELIVERED"];

export default function Orders() {
  const breadcrumb = [
    <div className="text-[14px] font-semibold text-white">
      <a href="/order-manager">Order manager</a>
    </div>,
    <div className="text-[14px] font-semibold text-white">Orders</div>,
  ];
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const handleDelete = () => {
    setOpen(false);
    //TODO
  };

  return (
    <div className="transition-all">
      <Confirmation
        open={open}
        handleClose={() => setOpen(false)}
        handleYes={handleDelete}
      />
      <OrderEdit open={editOpen} handleClose={() => setEditOpen(false)} />
      {/* navigation section */}
      <div className="bg-[#5A2E2E] w-full py-2">
        <div className="w-3/4 flex flex-row items-center justify-start m-auto">
          <Navigation breadcrumbs={breadcrumb} />
        </div>
      </div>
      {/* order manage section */}
      <div className="py-3 bg-[#FBDBDA]">
        <div className="w-3/4 m-auto">
          <div className=" mt-3 mb-3 ">
            <div className="text-2xl font-bold ">Manage Orders</div>
          </div>
          <div className="my-4">
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }}>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ fontWeight: 900 }}>Order ID</TableCell>
                    <TableCell sx={{ fontWeight: 900 }} align="left">
                      Customer Name
                    </TableCell>
                    <TableCell sx={{ fontWeight: 900 }} align="left">
                      Date
                    </TableCell>
                    <TableCell sx={{ fontWeight: 900 }} align="left">
                      Status
                    </TableCell>
                    <TableCell sx={{ fontWeight: 900 }} align="right">
                      Total
                    </TableCell>
                    <TableCell sx={{ fontWeight: 900 }} align="right">
                      Action
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: 900 }}
                      >
                        {row.name}
                      </TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left" sx={{ color: "red" }}>
                        <Dropdown
                          options={options}
                          onChange={(val) => {
                            console.log(val.value); //TODO
                          }}
                          value={options[0]}
                          disabled={false}
                          placeholder="Select an option"
                          className="border-0 border-none text-red"
                          controlClassName="border-none rounded-md text-red-600 bg-[#FBDBDA] font-semibold text-[13px]"
                          menuClassName="text-[13px] font-semibold"
                          placeholderClassName=" text-red"
                          
                        />
                      </TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                      <TableCell align="right">
                        <div className="flex flex-row space-x-3 justify-end items-center">
                          <IconButton
                            onClick={() => setEditOpen(true)}
                            sx={{
                              bgcolor: "#333",
                              color: "#fff",
                              "&:hover": { bgcolor: "#555" },
                            }}
                          >
                            <EditIcon />
                          </IconButton>
                          <IconButton
                            onClick={() => setOpen(true)}
                            sx={{
                              bgcolor: "#AA4A44",
                              color: "#fff",
                              "&:hover": { bgcolor: "#555" },
                            }}
                          >
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
