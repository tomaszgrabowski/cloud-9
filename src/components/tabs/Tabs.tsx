import React, { FC } from "react";

const Tabs: FC = ({ children }) => {
  return <div className={"flex justify-around py-2"}>{children}</div>;
};

export default Tabs;
