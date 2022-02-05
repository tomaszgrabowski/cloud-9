import React, { FC } from "react";

export type IconProps = {
  type: string;
  title: string;
  width: number;
  height: number;
  className?: string;
};

const Icon: FC<IconProps> = (props) => {
  return (
    <img
      src={`/icons/${props.type}.svg`}
      alt="title"
      width={props.width}
      height={props.height}
      className={props.className}
    />
  );
};

export default Icon;
