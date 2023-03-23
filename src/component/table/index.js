import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { allUsers } from "../../utils/api";
// import Button from "../standard/Button";
import { Button } from "@mui/material";

export default function Table() {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const fun = async () => {
      const res = await allUsers();
      console.log("ressos", res);
      setUserList(res.data);
    };
    fun();
  }, []);
  console.log("USERDATA", userList);
  return (
    <div className="container"> 
      <Button
        variant="contained"
        //  onClick={handleAdd}
      >
        Add
      </Button>
      <div className="userContainer">
        <table>
          <tbody>
            <tr>
              <th>Name</th>
              <th>Contact</th>
              <th>City</th>
              <th>Country</th>
              <th>Dob</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {userList.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.phone}</td>
                <td>{item.city}</td>
                <td>{item.country}</td>
                <td>{item.dob}</td>
                <td><Button variant="outlined" color="secondary">Edit</Button></td>
                <td><Button variant="outlined" color="error">Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
