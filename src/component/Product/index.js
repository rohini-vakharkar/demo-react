import React, { useState } from "react";
import { BasicButton, Input } from "../standard";
import "./style.css";
import { Box, width } from "@mui/system";
import axios from "axios";

export default function Product() {
  const initialValues = {
    name: "",
    price: "",
    quantity: "",
    image: "",
    details: "",
    file: "",
  };
  const [dataVal, setDataVal] = useState(initialValues);
  const [img, setImg] = useState("");

  const handleProduct = (e) => {
    // const file = e.target.;
    // console.log("file", file);
    const { name, value } = e.target;
    setDataVal({ ...dataVal, [name]: value });
    console.log("dataVal", dataVal);
  };
  const productSubmit = async (e) => {
    e.preventDefault();
    const res = {
      id: 5,
      name: dataVal.name,
      price: dataVal.price,
      quantity: dataVal.quantity,
      image: img,
      details: dataVal.details,
    };
    console.log("RES", res);

    let response = await axios.post(
      "http://localhost:9000/api/productList",
      res,
      {
        Headers: { "Content-Type": "application/json" },
      }
    );
    console.log("response", response);
  };

  const handleImageChange = (e) => {
    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      setImg(reader.result);
    };

    reader.readAsDataURL(file);
  };
  return (
    <div className="product-con">
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          border: "2px solid grey",
          m: 1,
          width: 400,
          height: 500,
        }}
        noValidate
        autoComplete="off"
      >
        <div className="inner-container">
          <Input
            required
            value={dataVal.name}
            id="outlined-basic"
            name="name"
            onChange={handleProduct}
            label="Product Name"
            variant="outlined"
          />
          <br />

          <Input
            required
            value={dataVal.price}
            id="outlined-basic"
            name="price"
            onChange={handleProduct}
            label="Price"
            variant="outlined"
            icon={"$"}
          />
          <br />

          <Input
            id="outlined-number"
            name="quantity"
            label="Quantity"
            type="number"
            variant="outlined"
            value={dataVal.quantity}
            onChange={handleProduct}
          />
          <br />

          <input
            type="file"
            id="myFile"
            name="image"
            onChange={(e) => handleImageChange(e)}
          />
          <br />
          <br />

          <Input
            required
            value={dataVal.details}
            id="outlined-basic"
            name="details"
            onChange={handleProduct}
            label="Details"
            variant="outlined"
          />
          <div className="login-btn">
            <BasicButton
              id="btn"
              value="submit"
              onClick={productSubmit}
              variant="contained"
            />
          </div>
        </div>
      </Box>
    </div>
  );
}
// let reader = new FileReader();
// let file = e.target.files;

// reader.onloadend = () => {
//   setImg({
//     file: file,
//     imagePreviewUrl: reader.result
//   });
// }

// reader.readAsDataURL(file)
