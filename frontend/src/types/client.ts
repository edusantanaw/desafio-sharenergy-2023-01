export type address = {
  number: number;
  street: string;
  city: string;
};

export type client = {
  _id?: string;
  name: string;
  email: string;
  phone: number;
  address: address;
  cpf: string;
};
