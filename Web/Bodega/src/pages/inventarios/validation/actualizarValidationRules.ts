import { IActualizarInventario } from "../../../api/bodega/interfaces/Inventario/IActualizarInventario";

export const actualizarValidationRules: Record<keyof IActualizarInventario, ValidationRule> = {
    productoId: {
        required: true,
        custom: (value: string) => {
        if (!value) return "El producto es requerido.";
        return null;
        },
    },
    seccionId: {
        required: true,
        custom: (value: string) => {
        if (!value) return "La sección es requerida.";
        return null;
        },
    },
    cantidad: {
        required: true,
        isNumber: true,
        isPositive: true,
        custom: (value: number) => {
        if (value <= -1) return "La cantidad debe ser mayor que 0.";
        return null;
        },
    },
}