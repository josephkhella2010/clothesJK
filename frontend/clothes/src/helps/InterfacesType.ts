export interface ImgsType {
  imgs: string;
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  imgs: ImgsType[];
}

export interface ProductState {
  products: ProductType[];
  isLoading?: boolean;
}
export interface UserType {
  username: string;
  email: string;
  password: string;
  itemProduct?: ProductType[];
}
export interface SingleUserType {
  username: string;
  password: string;
}
