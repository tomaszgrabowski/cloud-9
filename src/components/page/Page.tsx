import React, { FC } from "react";
import ViewHeader from "../view-header/ViewHeader";

export type PageProps = {
  title: string;
  header: boolean;
  headerIconLeft: string;
  headerIconRight: string;
  iconAction?: () => void;
  headerOver?: boolean;
  headerIconSize?: number;
};

const Page: FC<PageProps> = ({
  children,
  title,
  header,
  headerIconLeft,
  headerIconRight,
  iconAction,
  headerOver,
  headerIconSize,
}) => {
  return (
    <>
      {header && (
        <ViewHeader
          title={title}
          headerIconLeft={headerIconLeft}
          headerIconRight={headerIconRight}
          iconAction={iconAction}
          over={headerOver}
          iconSize={headerIconSize}
        />
      )}
      {children}
    </>
  );
};

export default Page;
