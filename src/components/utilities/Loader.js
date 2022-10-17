import React from "react";
import { Loading3QuartersOutlined } from "@ant-design/icons";
import { Spin } from "antd";

// if you want to change the loader then change the icon

export const Loader = (props) => {
  return (
    <Spin
      indicator={
        <Loading3QuartersOutlined
          style={{ fontSize: `${props.loaderSize}` }}
          spin
        />
      }
    />
  );
};
