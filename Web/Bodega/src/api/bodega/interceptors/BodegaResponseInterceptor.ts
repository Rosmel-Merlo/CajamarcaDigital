const BodegaResponseInterceptor = (response: any) => {
  /* console.log("Response Interceptor:", response); */
  return response;
};

const BodegaResponseErrorInterceptor = (error: any) => {
  console.error("Response Error:", error);
  // Manejar errores globales
  if (error.response?.status === 401) {
    alert("Sesión expirada, redirigiendo al login...");
    window.location.href = "/login"; // Redirigir al login
  }
  return Promise.reject(error);
};

export { BodegaResponseInterceptor, BodegaResponseErrorInterceptor };
