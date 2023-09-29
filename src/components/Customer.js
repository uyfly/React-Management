import React from "react";
import { TableRow, TableCell } from "@mui/material";

const Customer = ({ customer }) => {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell>{customer.id}</TableCell>
      <TableCell>
        <img src={customer.image} />
      </TableCell>
      <TableCell>{customer.name}</TableCell>
      <TableCell>{customer.birthday}</TableCell>
      <TableCell>{customer.gender}</TableCell>
      <TableCell>{customer.job}</TableCell>
    </TableRow>
  );
};

const CustomerProfile = (props) => {
  return (
    <div>
      <img src={props.image} alt="profile" />
      <h2>
        {props.name}({props.id})
      </h2>
    </div>
  );
};

const CustomerInfo = (props) => {
  return (
    <div>
      <p>{props.birthday}</p>
      <p>{props.gender}</p>
      <p>{props.job}</p>
    </div>
  );
};

export default Customer;
