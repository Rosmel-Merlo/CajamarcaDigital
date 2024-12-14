import { Route, Routes } from "react-router-dom";
import { Verified } from "./Verified";
import Categorias from "../pages/categorias/listado/Categorias";
import Proveedores from "../pages/proveedor/listado/Proveedores";
import Secciones from "../pages/secciones/listado/Secciones";
import Productos from "../pages/productos/listado/Productos";

export const ContentRouter = () => {
  return (
    <Routes>
      <Route path="bodega" element={<Verified />}>
        <Route path="categorias" element={<Categorias />} />
        <Route path="proveedores" element={<Proveedores />} />
        <Route path="secciones" element={<Secciones />} />
        <Route path="productos" element={<Productos />} />
      </Route>
    </Routes>
  );
};
