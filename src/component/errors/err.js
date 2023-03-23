import React from "react";

export default function ErrorMsg(props) {
  const { text } = props;
  return <span style={{ color: "red" }}>{text}</span>;
}
