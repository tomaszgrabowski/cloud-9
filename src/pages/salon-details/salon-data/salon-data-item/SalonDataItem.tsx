import React, { FC } from "react";
import Icon from "../../../../components/icon/Icon";

export type SalonDataItemProps = {
  icon?: string;
  content: string;
  iconSize?: number;
  options?: boolean;
};

const SalonDataItem: FC<SalonDataItemProps> = ({
  content,
  icon,
  iconSize,
  options,
}) => {
  return (
    <div className={"flex justify-start gap-2 px-2 py-2"}>
      {icon && iconSize && (
        <Icon type={icon} height={iconSize} width={iconSize} title={icon} />
      )}
      {content}
      {options && (
        <Icon type={"arrow-down"} title={"arrow-down"} height={16} width={16} />
      )}
    </div>
  );
};

export default SalonDataItem;
