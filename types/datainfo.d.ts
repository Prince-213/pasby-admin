export interface PasbyInfo {
  nin: string;
  pending: boolean;
  source: Source;
}

export interface Source {
  data: Data;
  extra: Extra;
}

export interface Data {
  marital_status: string;
  gender: string;
  date_of_birth: string;
  last_name: string;
  photo: string;
  phone_number: string;
  employment_status: string;
  middle_name: string;
  first_name: string;
  email: string;
}

export interface Extra {
  phone: string;
  name: string;
  birth: Birth;
  residence: Residence;
  email: string;
}

export interface Birth {
  place: string;
  state: string;
}

export interface Residence {
  address: string;
  city: string;
  state: string;
}
