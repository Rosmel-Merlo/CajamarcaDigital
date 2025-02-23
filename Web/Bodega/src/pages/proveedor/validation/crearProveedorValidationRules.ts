import { ICrearProveedor } from "../../../api/bodega/interfaces/Proveedor/ICrearProveedor";

export const crearProveedorValidationRules: Record<
  keyof ICrearProveedor,
  ValidationRule
> = {
  ruc: {
    required: true,
    minLength: 11, // Ajustado a 11 dígitos, estándar en algunos países
    maxLength: 11,
    custom: (value: string) => {
      const rucRegex = /^\d{11}$/;
      if (!rucRegex.test(value)) {
        return "El RUC debe contener exactamente 11 dígitos numéricos.";
      }
      return null;
    },
  },
  nombreContacto: {
    required: true,
    minLength: 5,
    maxLength: 100,
    custom: (value: string) => {
      const nombreRegex = /^[A-Za-záéíóúÁÉÍÓÚüÜñÑ\s]+$/;
      if (!nombreRegex.test(value)) {
        return "El nombre solo puede contener letras y espacios.";
      }
      return null;
    },
  },
  telefonoContacto: {
    required: true,
    minLength: 9,
    maxLength: 15,
    custom: (value: string) => {
      const telefonoRegex = /^[0-9()+-\s]+$/;
      if (!telefonoRegex.test(value)) {
        return "El teléfono solo puede contener números, espacios, paréntesis y guiones.";
      }
      return null;
    },
  },
  telefono: {
    required: true,
    minLength: 9,
    maxLength: 15,
    custom: (value: string) => {
      const telefonoRegex = /^[0-9()+-\s]+$/;
      if (!telefonoRegex.test(value)) {
        return "El teléfono solo puede contener números, espacios, paréntesis y guiones.";
      }
      return null;
    },
  },

  direccion: {
    required: true,
    minLength: 10,
    maxLength: 200,
    custom: (value: string) => {
      const direccionRegex = /^[A-Za-z0-9áéíóúÁÉÍÓÚüÜñÑ#.,\s-]+$/;
      if (!direccionRegex.test(value)) {
        return "La dirección solo puede contener letras, números, espacios, puntos, comas, guiones y #.";
      }
      return null;
    },
  },
  email: {
    required: true,
    minLength: 5,
    maxLength: 50,
    custom: (value: string) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return "El formato del correo electrónico no es válido.";
      }
      return null;
    },
  },
};
