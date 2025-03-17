export type QueryMethod = "post" | "put" | "patch" | "delete";

export interface ApiResponseSuccess<T> {
  status: string;
  success: boolean;
  message: string;
  data: T | null;
  token?: string;
}

export interface ApiResponseError {
  status: string;
  success: boolean;
  message: string;
  data: null;
}
