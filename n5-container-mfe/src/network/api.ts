import { AxiosRequestConfig, AxiosResponse } from "axios";
import { apiConfig } from "./api.config";
import { HttpClient } from "./http-client";

export class Api extends HttpClient {
  constructor(config?: AxiosRequestConfig) {
    const customConfig: AxiosRequestConfig = config
      ? {
          ...apiConfig,
          ...config,
        }
      : apiConfig;

    super(customConfig);
  }

  public rickAndMortyCharacters<T>(): Promise<AxiosResponse<T, any>> {
    return this.get<T>(`https://rickandmortyapi.com/api/character`);
  }

  public harryPotterCharacters<T>(): Promise<AxiosResponse<T, any>> {
    return this.get<T>(`https://hp-api.onrender.com/api/characters`);
  }
}
