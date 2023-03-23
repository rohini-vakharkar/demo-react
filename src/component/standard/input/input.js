import React from "react";
import { TextField } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
// import { type } from "@testing-library/user-event/dist/type";
export default function Input(props) {
  const { id,value, name ,icon, label, autoComplete, onChange, type, variant } =
    props;
  return (
    <div>
      <TextField
        id={id}
        value={value}
        name={name}
        // InputProps={InputProps}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">{icon}</InputAdornment>
          ),
        }}
        label={label}
        type={type}
        onChange={onChange}
        autoComplete={autoComplete}
        variant={variant}
      />
    </div>
  );
}
