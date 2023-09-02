import { AxiosRequestConfig } from "axios";
import { Api } from "./api";

export class ApiSingleton extends Api {
  private static classInstance: ApiSingleton;

  private constructor(config: AxiosRequestConfig) {
    super(config);
  }

  public static refreshInstance(config?: AxiosRequestConfig): ApiSingleton {
    this.classInstance = new ApiSingleton({
      ...config,
      baseURL: "",
    });
    this.classInstance.instance.interceptors?.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error?.response?.status === 401) {
          window.location.href = "/";
          return;
        }
        return Promise.reject(error);
      }
    );
    return this.classInstance;
  }

  public static getInstance(config?: AxiosRequestConfig): ApiSingleton {
    if (this.classInstance) {
      return this.classInstance;
    }

    this.classInstance = new ApiSingleton({
      ...config,
      baseURL: "",
    });

    return this.classInstance;
  }

  public static async setMode(mode) {
    this.classInstance.instance.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  }
}
