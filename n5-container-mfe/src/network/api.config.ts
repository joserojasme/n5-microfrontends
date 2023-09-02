import { AxiosRequestConfig } from "axios";
import * as qs from "qs";

export const apiConfig: AxiosRequestConfig = {
  timeout: 300000,
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  paramsSerializer: (params: string): string =>
    qs.stringify(params, { indices: false }),
};
