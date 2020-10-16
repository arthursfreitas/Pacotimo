import { api } from '../services/api';

export interface IPackage {
  destiny: string;
  price: number;
  imageUrl: string;
  outboundDate: number;
  inboundDate: number;
}

interface IAll {
  flight: IFlights;
  iata: IIataCodes;
  hotel: IHotels;
}

interface IFlights {
  id: string;
  company: string;
  price: number;
  departureAirport: IIataCodes['id'];
  arrivalAirport: IHotels['iata'];
  outboundDate: number;
  inboundDate: number;
}
interface IIataCodes {
  id: string;
  city: string;
  imageUrl: string;
}
interface IHotels {
  id: string;
  name: string;
  iata: IIataCodes['id'];
  pricePerNight: number;
}

const packages = async () => {

  const flights = await api.get('/flights')
    .then(flight => { return flight.data });

  const iataCodes = await api.get('/iataCodes')
    .then(iataCode => { return iataCode.data });

  const hotels = await api.get('/hotels')
    .then(hotel => { return hotel.data });

  const allPackage = [...flights, ...iataCodes, ...hotels];

  const newPackage = allPackage.filter((promo: any) => {

    return {
      destiny: promo.city,
      price: promo.price,
      imageUrl: promo.imageUrl,
      outboundDate: promo.outboundDate,
      inboundDate: promo.outboundDate,
    }

  })
  return newPackage;
}


export default packages;