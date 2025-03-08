import { ICrearProducto } from "../../../api/bodega/interfaces/Productos/ICrearProducto";

export const crearProductoValidationRules: Record<
  keyof ICrearProducto,
  ValidationRule
> = {
  nombre: {
    required: true,
    minLength: 3,
    maxLength: 50,
  },
  descripcion: {
    required: true,
    minLength: 10,
    maxLength: 200,
  },
  precioCompra: {
    required: true,
    isNumber: true,
    isPositive: true,
  },
  precioVenta: {
    required: true,
    isNumber: true,
    isPositive: true,
    custom: (value: number) => {
      if (value <= 0) return "El precio de venta debe ser mayor que 0.";
      return null;
    },
  },
  categoriaId: {
    required: true,
  },
  stockMinimo: {
    required: true,
    isNumber: true,
    isPositive: true,
    custom: (value: number) => {
      if (value <= 0) return "El stock mínimo debe ser mayor que 0.";
      return null;
    },
  },
  codigo: {
    required: true,
    minLength: 5,
    maxLength: 15,
    custom: (value: string) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        return "El código solo puede contener letras y números.";
      }
      return null;
    },
  },
};
