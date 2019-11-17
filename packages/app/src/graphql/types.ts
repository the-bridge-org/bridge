export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginInput = {
  username: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename?: "Mutation";
  register: User;
  login: User;
};

export type MutationRegisterArgs = {
  payload: RegisterInput;
};

export type MutationLoginArgs = {
  payload: LoginInput;
};

export type Query = {
  __typename?: "Query";
  ping: Scalars["String"];
};

export type RegisterInput = {
  username: Scalars["String"];
  phoneNumber: Scalars["String"];
  password: Scalars["String"];
};

export type User = {
  __typename?: "User";
  id: Scalars["ID"];
  username: Scalars["String"];
  phoneNumber: Scalars["String"];
  /** Only register, login, and me will return access token */
  token?: Maybe<Scalars["String"]>;
  createdAt: Scalars["Int"];
};
