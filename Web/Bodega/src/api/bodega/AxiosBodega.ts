import axios from "axios";
import BodegaRequestInterceptor from "./interceptors/BodegaRequestInterceptor";
import {
  BodegaResponseErrorInterceptor,
  BodegaResponseInterceptor,
} from "./interceptors/BodegaResponseInterceptor";

let serverBodegaUrl = "http://localhost:5273/api/v1/";

const axiosBodega = axios.create({
  baseURL: serverBodegaUrl,
  timeout: 30000,
  headers: { "Content-type": "application/json" },
});

axiosBodega.interceptors.request.use(BodegaRequestInterceptor);

axiosBodega.interceptors.response.use(
  BodegaResponseInterceptor,
  BodegaResponseErrorInterceptor
);

export { axiosBodega };
