import React, { FC } from "react";
import Icon from "../../../components/icon/Icon";

export type RatingProps = {
  rating: number;
  gap?: number;
  starSize?: number;
};

const Ratings: FC<RatingProps> = ({ rating, gap, starSize }) => {
  return (
    <div className={`flex ${gap ? `gap-${gap}` : ``}`}>
      {Array(5)
        .fill(0)
        .map((item, index) => (
          <Icon
            key={index}
            type={index <= rating ? "star-filled" : "star"}
            title={"star"}
            height={starSize ? starSize : 10}
            width={starSize ? starSize : 10}
          />
        ))}
    </div>
  );
};

export default Ratings;
