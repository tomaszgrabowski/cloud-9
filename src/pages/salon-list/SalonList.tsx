import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import SingleOptionDropdown from "../../components/single-option-dropdown/SingleOptionDropdown";
import GenericList from "../../components/generic-list/GenericList";
import { definedPriceRanges, PriceRange, salons } from "../../mock";
import SalonListItem from "./salon-list-item/SalonListItem";
import PriceRangeDropdownOption from "../../components/single-option-dropdown/price-range-dropdown-option/PriceRangeDropdownOption";
import { Salon } from "../../types/types";

const SalonList: FC = () => {
  const [pickedOption, setPickedOption] = useState(definedPriceRanges[0]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [pickedSalons, setPickedSalons] = useState(salons);
  const handleClick = (item: PriceRange) => {
    setPickedOption(item);
    setIsMenuVisible(false);
  };
  const toggleVisibility = () => setIsMenuVisible(!isMenuVisible);
  useEffect(() => {
    setPickedSalons(filterSalonsByPrice(salons, pickedOption));
  }, [pickedOption]);
  return (
    <Page
      title={"Hår"}
      header={true}
      headerIconLeft={"arrow"}
      headerIconRight={"filter"}
    >
      <SingleOptionDropdown
        title={`Pris ${pickedOption.from} - ${pickedOption.to} kr`}
        toggleOptionVisibility={toggleVisibility}
        isVisible={isMenuVisible}
        data={definedPriceRanges}
        renderItem={(item) => (
          <PriceRangeDropdownOption
            key={item.id}
            priceRange={item}
            handleClick={() => handleClick(item)}
          />
        )}
      />
      <GenericList
        data={pickedSalons}
        renderItem={(item) => <SalonListItem key={item.id} salon={item} />}
      />
    </Page>
  );
};

export default SalonList;

const filterSalonsByPrice = (salons: Salon[], pickedOption: PriceRange) =>
  salons.filter((item) => {
    if (item.price >= pickedOption.from && item.price <= pickedOption.to) {
      return true;
    }
  });
