type ValidationRule = {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  minValue?: number;
  maxValue?: number;
  isNumber?: boolean;
  isPositive?: boolean;
  custom?: (value: any) => string | null;
};

type ValidationErrors<T> = {
  [key in keyof T]?: string; // Un objeto con claves del formulario y mensajes de error
};

