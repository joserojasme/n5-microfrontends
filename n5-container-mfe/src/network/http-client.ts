import { Axios } from "./axios";
import { AxiosRequestConfig, AxiosResponse, AxiosError } from "axios";

/**
 * @class Api Class is a fancy es6 wrapper class for axios.
 *
 * @param {import("axios").AxiosRequestConfig} config - axios Request Config.
 * @link [AxiosRequestConfig](https://github.com/axios/axios#request-config)
 */

export class HttpClient extends Axios {
  private token: string;

  /**
   * Creates an instance of api.
   * @param {import("axios").AxiosRequestConfig} conf
   */
  public constructor(conf: AxiosRequestConfig) {
    super(conf);

    this.token = "";

    this.instance?.interceptors?.request.use(
      (param) => {
        return {
          ...param,
        };
      },
      (error) => {
        // handling error
        return Promise.reject(error);
      }
    );

    // this middleware is been called right before the response is get it by the method that triggers the request
    this.instance?.interceptors?.response.use(
      (param) => ({
        ...param,
      }),
      (error) => {
        // handling error
        return Promise.reject(error);
      }
    );
  }
  /**
   * Gets Token.
   *
   * @returns {string} token.
   * @memberof Api
   */
  public getToken(): string {
    return ``;
  }
  /**
   * Sets Token.
   *
   * @param {string} token - token.
   * @memberof Api
   */
  public setToken(token: string): void {
    this.token = token;
  }

  /**
   * Get Uri
   *
   * @param {import("axios").AxiosRequestConfig} [config]
   * @returns {string}
   * @memberof Api
   */
  public getUri(config?: AxiosRequestConfig): string {
    return this.instance.getUri(config);
  }
  /**
   * Generic request.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} - HTTP axios response payload.
   * @memberof Api
   *
   *
   */
  public request<T, R = AxiosResponse<T>>(
    config: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.request(config);
  }
  /**
   * HTTP GET method, used to fetch data `statusCode`: 200.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} HTTP `axios` response payload.
   * @memberof Api
   */
  public get<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.get(url, config);
  }
  /**
   * HTTP OPTIONS method.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} HTTP `axios` response payload.
   * @memberof Api
   */
  public options<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.options(url, config);
  }
  /**
   * HTTP DELETE method, `statusCode`: 204 No Content.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public delete<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.delete(url, config);
  }
  /**
   * HTTP HEAD method.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public head<T, R = AxiosResponse<T>>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.head(url, config);
  }
  /**
   * HTTP POST method `statusCode`: 201 Created.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {B} data - payload to be send as the `request body`,
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public post<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.post(url, data, config);
  }
  /**
   * HTTP PUT method.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {B} data - payload to be send as the `request body`,
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public put<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.put(url, data, config);
  }
  /**
   * HTTP PATCH method.
   *
   * @access public
   * @template T - `TYPE`: expected object.
   * @template B - `BODY`: body request object.
   * @template R - `RESPONSE`: expected object inside a axios response format.
   * @param {string} url - endpoint you want to reach.
   * @param {B} data - payload to be send as the `request body`,
   * @param {import("axios").AxiosRequestConfig} [config] - axios request configuration.
   * @returns {Promise<R>} - HTTP [axios] response payload.
   * @memberof Api
   */
  public patch<T, B, R = AxiosResponse<T>>(
    url: string,
    data?: B,
    config?: AxiosRequestConfig
  ): Promise<R> {
    return this.instance.patch(url, data, config);
  }
  /**
   *
   * @template T - type.
   * @param {import("axios").AxiosResponse<T>} response - axios response.
   * @returns {T} - expected object.
   * @memberof Api
   */
  public success<T>(response: AxiosResponse<T>): T {
    return response.data;
  }
  /**
   *
   *
   * @template T type.
   * @param {AxiosError<T>} error
   * @memberof Api
   */
  public error<T>(error: AxiosError<T>): void {
    throw error;
  }
}
