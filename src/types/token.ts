export type TokenData = {
  id: string;
  user?: string;
  email?: string;
};

export type Token = {
  data: TokenData;
};

export type TokenResponse = {
  token: string;
};
