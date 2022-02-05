import { Salon } from "./types/types";

export const salons: Salon[] = [
  {
    id: "abc",
    hour: "12.00",
    name: "SalonA",
    price: 123,
    rating: 3,
    address: "Generic St. 23",
    time: 30,
    openHours: {
      from: "9:00",
      to: "18:00",
    },
    phone: "555-555-555",
    webpage: "www.test.se",
    description:
      "Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
  },
  {
    id: "def",
    hour: "12.00",
    name: "SalonB",
    price: 245,
    rating: 2,
    address: "Generic St. 12",
    time: 30,
    openHours: {
      from: "9:00",
      to: "18:00",
    },
    phone: "555-555-555",
    webpage: "www.test.se",
    description:
      "Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
  },
  {
    id: "ghi",
    hour: "12.00",
    name: "SalonC",
    price: 250,
    rating: 5,
    address: "Generic Av. 123",
    time: 30,
    openHours: {
      from: "9:00",
      to: "18:00",
    },
    phone: "555-555-555",
    webpage: "www.test.se",
    description:
      "Lorem ipsum dolor sit amet, vulputate nunc. Auctor viverra. Ridiculus feugiat nunc porttitor volut pat, acu quis torquent iaculis ultricies massa, duis nun quis que amet.",
  },
];

export type PriceRange = {
  from: number;
  to: number;
  id: string;
};
export const definedPriceRanges: PriceRange[] = [
  {
    id: "hdfg",
    from: 0,
    to: 50,
  },
  {
    id: "jkhj",
    from: 51,
    to: 100,
  },
  {
    id: "erter",
    from: 101,
    to: 150,
  },
  {
    id: "nbmbn",
    from: 151,
    to: 200,
  },
  {
    id: "vutfj",
    from: 201,
    to: 250,
  },
];
