export interface Pending {
  status: string;
  reason: string;
  data: Data;
}

export interface Data {
  requests: Request[];
}

export interface Request {
  nin: string;
  pending: boolean;
  source: Source;
}

export interface Source {
  data: Data2;
  extra: Extra;
}

export interface Data2 {
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
