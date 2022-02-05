import React, { FC } from "react";
import { Salon } from "../../../types/types";
import { useNavigate } from "react-router-dom";
import { ApplicationRoutes } from "../../../AppRoutes";
import Ratings from "../ratings/Ratings";
import Icon from "../../../components/icon/Icon";

export type SalonListItemProps = {
  salon: Salon;
};

const SalonListItem: FC<SalonListItemProps> = ({ salon }) => {
  const navigate = useNavigate();
  return (
    <div
      className={
        "flex w-full justify-between py-5 border-b border-gray-100 items-center"
      }
      onClick={() => navigate(`${ApplicationRoutes.SalonDetails}/${salon.id}`)}
    >
      <div className={"flex flex-col justify-between gap-2 w-10/12"}>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2 items-end"}>
            <div className={"w-16"}>{salon.hour}</div>
            <div className={"text-lg font-sans"}>{salon.name}</div>
          </div>
          <div>{salon.price} kr</div>
        </div>
        <div className={"flex justify-between"}>
          <div className={"flex gap-2"}>
            <div className={"w-16"} />
            <Ratings rating={salon.rating} />
            <div className={"text-sm text-gray-400"}>(32)</div>
          </div>
          <div className={"text-sm text-gray-400"}>{salon.time} min</div>
        </div>
        <div className={"flex gap-2"}>
          <div className={"w-16"} />
          <div className={"text-gray-500"}>{salon.address}</div>
        </div>
      </div>
      <Icon
        type={"arrow-left"}
        title={"arrow-left"}
        width={6}
        height={6}
        className={"w-2/12 h-2 pl-10"}
      />
    </div>
  );
};

export default SalonListItem;
