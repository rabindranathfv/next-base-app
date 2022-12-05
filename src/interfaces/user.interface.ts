export interface Address {
  street: string;
  suite: string;
  city: string;
}

export interface User {
  id: number;
  name: string;
  phone: string;
  email: string;
  username: string;
  website: string;
  address: Address;
}
