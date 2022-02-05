import React, { ReactNode } from "react";

export type GenericListProps<T> = {
  data: T[];
  renderItem: (item: T) => ReactNode;
};

const GenericList = <T extends { id: string }>({
  data,
  renderItem,
}: GenericListProps<T>) => {
  return (
    <section className={"flex flex-col px-1"}>
      {data.map((item) => (
        <div key={item.id}>{renderItem(item)}</div>
      ))}
    </section>
  );
};

export default GenericList;
