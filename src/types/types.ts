export type Salon = {
  id: string;
  hour: string;
  name: string;
  price: number;
  rating: number;
  address: string;
  time: number;
  openHours: {
    from: string;
    to: string;
  };
  phone: string;
  webpage: string;
  description: string;
};
