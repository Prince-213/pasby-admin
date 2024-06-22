export interface CreatePasby {
  status: string;
  reason: string;
  data: Data;
}

export interface Data {
  id: Id;
  pasby: Pasby;
  activator: string;
}

export interface Id {
  id: string;
  nin: string;
  locale: string;
  source: string[];
  iDs: string[];
  vendor: string;
  contact: Contact;
  address: Address;
  nationality: Nationality;
  bio: Bio;
  idcards: Idcards;
  naming: Naming;
  created: number;
  lut: number;
  financial: Financial;
}

export interface Contact {
  email: string;
  emailVerified: boolean;
  phone: string;
  phoneVerified: boolean;
}

export interface Address {
  city: string;
  postCode: string;
  state: string;
  countryCode: string;
  country: string;
  place: string;
  formatted: string;
  longitude: any;
  latitude: any;
}

export interface Nationality {
  nationalities: string[];
  primary: string;
  residence: string;
  pep: boolean;
  watchListed: boolean;
}

export interface Bio {
  birthdate: string;
  photo: string;
  birthnumber: number;
  birthplace: string;
  birthstate: string;
  maritalStatus: string;
  gender: string;
  dateOfDeath: any;
}

export interface Idcards {
  passport: string;
}

export interface Naming {
  family: string;
  given: string;
  middle: string;
  nickname: string;
  title: string;
  name: string;
  preferredUsername: string;
  titlePrefix: any;
  titleSuffix: any;
}

export interface Financial {
  bvn: string;
  bvnBank: string;
  bvnLevel: string;
  bvnIAT: any;
}

export interface Pasby {
  id: string;
  vendor: string;
  created: number;
  lut: number;
  test: boolean;
  activated: boolean;
  validTo: number;
  deviceInfo: any;
}
