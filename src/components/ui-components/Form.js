import React from "react";
import { Form } from "antd";

const FormBase = (props) => {
  const { className } = props;
  const layoutChange = "vertical";
  return (
    <>
      <Form
        scrollToFirstError={true}
        layout={layoutChange}
        className={`${className}`}
        requiredMark={false}
        {...props}
      ></Form>
    </>
  );
};

export default FormBase;
