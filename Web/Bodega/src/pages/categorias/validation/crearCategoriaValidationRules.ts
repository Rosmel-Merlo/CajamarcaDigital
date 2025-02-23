import { ICrearCategoria } from "../../../api/bodega/interfaces/Categoria/ICrearCategoria";

export const crearCategoriaValidationRules: Record<
  keyof ICrearCategoria,
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
  codigo: {
    required: true,
    minLength: 5,
    maxLength: 10,
    custom: (value: string) => {
      if (!/^[A-Za-z0-9]+$/.test(value)) {
        return "El código solo puede contener letras y números.";
      }
      return null;
    },
  },
};
