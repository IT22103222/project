import React, { useEffect, useState } from "react";
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
import axios from "axios";
import { toast } from "react-toastify";

const options = ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

const dateFormat = (isoDateString) => {
  const date = new Date(isoDateString);
  const formattedDate =
    date.getFullYear() +
    "/" +
    (date.getMonth() + 1).toString().padStart(2, "0") +
    "/" +
    date.getDate().toString().padStart(2, "0");

  return formattedDate;
};

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/v1/orders")
      .then((res) => {
        setOrders(res.data);
      })
      .catch((er) => {});
  }, []);

  const breadcrumb = [
    <div className="text-[14px] font-semibold text-white">
      <a href="/order-manager">Order manager</a>
    </div>,
    <div className="text-[14px] font-semibold text-white">Orders</div>,
  ];
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [currentStatus, setCurrentStatus] = useState();
  const [selectedID, setSelectedID] = useState("");

  const handleDelete = () => {
    setOpen(false);

    axios
      .delete("http://localhost:5000/api/v1/orders/" + selectedID)
      .then((res) => {
        toast("Order deleted", { type: "success" });
      })
      .catch((er) => {
        toast("Unable to delete order", { type: "error" });
      });

    setSelectedID("");
  };

  const updateStatus = (status, id) => {
    setOpen(false);
    console.log(options.indexOf(currentStatus), options.indexOf(status));
    // if (options.indexOf(currentStatus) > options.indexOf(status)) {
    //   return toast("Can't select this status", { type: "error" });
    // }

    axios
      .put("http://localhost:5000/api/v1/orders/" + id, {
        status,
      })
      .then((res) => {
        toast("Status updated", { type: "success" });
      })
      .catch((er) => {
        toast("Unable to update status", { type: "error" });
      });
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
                  {orders?.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        component="th"
                        scope="row"
                        sx={{ fontWeight: 900, fontSize: "12px" }}
                      >
                        {row?._id}
                      </TableCell>
                      <TableCell align="left">{row?.customer?.name}</TableCell>
                      <TableCell align="left">
                        {dateFormat(row?.createdAt)}
                      </TableCell>
                      <TableCell align="left" sx={{ color: "red" }}>
                        <Dropdown
                          options={options}
                          value={row?.status}
                          onChange={(val) => {
                            let val1 = row?.status;
                            setCurrentStatus(val1);
                            updateStatus(val.value, row?._id);
                          }}
                          disabled={false}
                          placeholder="Select an option"
                          className="border-0 border-none text-red z-50"
                          controlClassName="border-none rounded-md text-red-600 z-50 bg-[#FBDBDA] font-semibold text-[13px]"
                          menuClassName="text-[13px] z-50 font-semibold"
                          placeholderClassName=" text-red"
                        />
                      </TableCell>
                      <TableCell align="right">${row?.totalPrice}</TableCell>
                      <TableCell align="right">
                        <div className="flex flex-row space-x-3 justify-end items-center">
                          {/* <IconButton
                            onClick={() => setEditOpen(true)}
                            sx={{
                              bgcolor: "#333",
                              color: "#fff",
                              "&:hover": { bgcolor: "#555" },
                            }}
                          >
                            <EditIcon />
                          </IconButton> */}
                          <IconButton
                            onClick={() => {
                              setOpen(true);
                              setSelectedID(row?._id);
                            }}
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
                  {orders.length === 0 && (
                    <div className="text-center font-semibold text-red-500 py-4">
                      No data to display
                    </div>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
