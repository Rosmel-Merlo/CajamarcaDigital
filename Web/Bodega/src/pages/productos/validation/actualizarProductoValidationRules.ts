import { IActualizarProducto } from "../../../api/bodega/interfaces/Productos/IActualizarProducto";

export const actualizarProductoValidationRules: Record<
  keyof IActualizarProducto,
  ValidationRule
> = {
  categoriaId: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  productoId: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  nombre: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
  descripcion: {
    required: true,
    minLength: 5,
    maxLength: 500,
  },
  precioCompra: {
    required: true,
    isNumber: true,
    isPositive: true,
    custom: (value: number) => {
      if (value <= 0) return "El precio de venta debe ser mayor que 0.";
      return null;
    },
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
  stockMinimo: {
    required: true,
    isNumber: true,
    isPositive: true,
    custom: (value: number) => {
      if (value < 0) return "El stock mínimo no puede ser negativo.";
      return null;
    },
  },
  codigo: {
    required: true,
    minLength: 2,
    maxLength: 100,
  },
};
