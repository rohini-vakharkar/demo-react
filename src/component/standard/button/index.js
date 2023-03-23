import React from "react";
import Button from "@mui/material/Button";

export default function BasicButton(props) {
  const { variant, id, value, onClick } = props;
  return (
    <Button variant={variant} onClick={onClick} value={value} id={id}>
      {value}
    </Button>
  );
}
