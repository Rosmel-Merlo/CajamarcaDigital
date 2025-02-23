import { ICrearSeccion } from "../../../api/bodega/interfaces/Seccion/ICrearSeccion";

export const CrearSeccionValidationRules: Record<
  keyof ICrearSeccion,
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
};
