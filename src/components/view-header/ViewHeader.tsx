import React, { FC } from "react";
import Icon from "../icon/Icon";
import { useNavigate } from "react-router-dom";

export type ViewHeaderProps = {
  title: string;
  headerIconLeft: string;
  headerIconRight: string;
  iconAction?: () => void;
  border?: boolean;
  over?: boolean;
  iconSize?: number;
};

const ViewHeader: FC<ViewHeaderProps> = ({
  title,
  headerIconLeft,
  headerIconRight,
  iconAction,
  border,
  over,
  iconSize,
}) => {
  const navigate = useNavigate();
  return (
    <section
      className={`flex justify-between pt-1 pb-1  ${
        border ? `border-b border-gold` : ``
      } text-lg z-50 items-center ${
        over ? `absolute top-0 left-0 w-full` : ``
      }`}
    >
      <span onClick={() => navigate(-1)}>
        <Icon
          type={headerIconLeft}
          width={iconSize ? iconSize : 9}
          height={iconSize ? iconSize : 19}
          title={headerIconLeft}
          className={"ml-1"}
        />
      </span>
      <span className={"text-lg default-text"}>{title}</span>
      <span onClick={iconAction}>
        <Icon
          type={headerIconRight}
          width={iconSize ? iconSize : 20}
          height={iconSize ? iconSize : 20}
          title={headerIconRight}
          className={"mr-1"}
        />
      </span>
    </section>
  );
};

export default ViewHeader;
