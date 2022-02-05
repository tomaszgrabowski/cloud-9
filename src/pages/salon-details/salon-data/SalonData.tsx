import React, { FC } from "react";
import { Salon } from "../../../types/types";
import SalonDataItem from "./salon-data-item/SalonDataItem";

export type SalonDataProps = {
  salon: Salon;
};

const SalonData: FC<SalonDataProps> = ({ salon }) => {
  return (
    <div className={"flex flex-col"}>
      <SalonDataItem icon={"pin"} content={salon.address} iconSize={16} />
      <SalonDataItem
        icon={"clock"}
        content={`Öppet till ${salon.openHours.to} idag`}
        iconSize={16}
        options={true}
      />
      <SalonDataItem icon={"phone"} content={salon.phone} iconSize={16} />
      <SalonDataItem icon={"globe"} content={salon.webpage} iconSize={16} />
      <SalonDataItem content={salon.description} />
    </div>
  );
};

export default SalonData;
