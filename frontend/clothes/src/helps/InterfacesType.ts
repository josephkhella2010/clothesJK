export interface ImgsType {
  imgs: string;
}

export interface ProductType {
  _id: string;
  name: string;
  description: string;
  price: number;
  imgs?: ImgsType[];
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
export interface ActivityType {
  img: string;
  header: string;
  description: string;
}
export interface FlagsMenuType {
  url: string;
  language: string;
}
export interface filtereNamType {
  name: string;
}

export interface QuestionItemType {
  header: string;
  body: string;
}
/* export interface QuestionType {
  Questions: QuestionItemType[];
} */
