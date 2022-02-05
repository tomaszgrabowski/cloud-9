import React, { FC } from "react";
import { PriceRange } from "../../../mock";

export type PriceRangeDropdownOptionProps<T> = {
  priceRange: PriceRange;
  handleClick: () => void;
};

const PriceRangeDropdownOption = <T extends { id: string }>({
  priceRange,
  handleClick,
}: PriceRangeDropdownOptionProps<T>) => {
  return (
    <li
      className={"border-b border-gray-200 p-1 cursor-pointer"}
      onClick={handleClick}
    >
      {priceRange.from} - {priceRange.to}
    </li>
  );
};

export default PriceRangeDropdownOption;
