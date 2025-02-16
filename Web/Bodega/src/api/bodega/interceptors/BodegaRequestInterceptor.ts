const BodegaRequestInterceptor = (config: any) => {
  // Agregar un token o cualquier configuración adicional
  const token = localStorage.getItem("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
/*   console.log("Request Interceptor:", config); */
  return config;
};

export default BodegaRequestInterceptor;
