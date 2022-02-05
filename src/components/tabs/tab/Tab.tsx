import React, { FC } from "react";

export type TabProps = {
  active?: boolean;
};

const Tab: FC<TabProps> = ({ children, active }) => {
  return (
    <div
      className={`${
        active ? `border-b-2 border-gold` : ``
      } w-full text-center py-2`}
    >
      {children}
    </div>
  );
};

export default Tab;
