import React, { ReactNode, useState } from "react";
import Icon from "../icon/Icon";

export type SingleOptionDropdownProps<T> = {
  title: string;
  data: T[];
  renderItem: (item: T) => ReactNode;
  toggleOptionVisibility: () => void;
  isVisible: boolean;
};

const SingleOptionDropdown = <T extends { id: string }>({
  title,
  renderItem,
  data,
  toggleOptionVisibility,
  isVisible,
}: SingleOptionDropdownProps<T>) => {
  return (
    <>
      <section
        className={
          "flex p-1 border-b border-gold justify-between font-sans text-base cursor-pointer"
        }
        onClick={toggleOptionVisibility}
      >
        {title}
        <Icon
          type={"path-2-copy-4"}
          title={"arrow-down"}
          width={10}
          height={6}
        />
      </section>
      {isVisible && (
        <ul className={"absolute bg-white w-full"}>
          {data.map((item) => renderItem(item))}
        </ul>
      )}
    </>
  );
};

export default SingleOptionDropdown;
