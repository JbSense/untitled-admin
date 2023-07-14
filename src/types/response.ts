export type Response<T> = {
  success: boolean;
  messsage?: string;
  data?: T;
};
