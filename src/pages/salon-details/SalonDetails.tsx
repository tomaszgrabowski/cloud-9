import React, { FC, useEffect, useState } from "react";
import Page from "../../components/page/Page";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../img/image.jpg";
import { Salon } from "../../types/types";
import { salons } from "../../mock";
import Ratings from "../salon-list/ratings/Ratings";
import Tabs from "../../components/tabs/Tabs";
import Tab from "../../components/tabs/tab/Tab";
import SalonData from "./salon-data/SalonData";

const SalonDetails: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [salon, setSalon] = useState<Salon | undefined>(undefined);
  useEffect(() => {
    setSalon(salons.find((salon) => salon.id === id));
  }, [id]);
  const navigate = useNavigate();
  return (
    <Page
      headerIconLeft={"arrow-white"}
      headerIconRight={"heart"}
      header={true}
      title={""}
      iconAction={() => navigate(-1)}
      headerOver={true}
      headerIconSize={20}
    >
      <div className={"flex flex-col"}>
        <div
          className={`flex flex-col justify-end justify-start pl-4 pb-5 h-60 w-full -top-11 text-white gap-2`}
          style={{
            background: `url(${img}) no-repeat`,
            backgroundSize: `cover`,
          }}
        >
          {salon && (
            <>
              <div className={"text-lg font-sans"}>{salon.name}</div>
              <div className={"flex gap-2"}>
                <Ratings rating={salon.rating} gap={1} starSize={14} />
                (32)
              </div>
            </>
          )}
        </div>

        <>
          <Tabs>
            <Tab active={true}>Info</Tab>
            <Tab>Schema</Tab>
          </Tabs>
          {salon && <SalonData salon={salon} />}
        </>
      </div>
    </Page>
  );
};

export default SalonDetails;
