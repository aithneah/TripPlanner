export interface ILocation
{

}

export interface ILocationTransport
{

}

export interface IPrice
{

}

export interface ITrip {

}

export interface ICountry {
  id: number;
  name: string;
}

export interface ICountries {
  countries: Array<ICountry>;
}

export interface ICity {
  id: number;
  cid: number;
  name: string;
}

export interface IUser {
  login?: string;
  passwd?: string;
  name: string;
  sname: string;
  age: number;
  trips: ITrip[];
}
