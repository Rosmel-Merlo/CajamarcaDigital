export const useValidateform = () => {
  function validateForm<T extends Record<string, any>>(
    formData: T,
    validationRules: Record<keyof T, ValidationRule>
  ): ValidationErrors<T> {
    const errors: ValidationErrors<T> = {};

    for (const key in validationRules) {
      if (validationRules.hasOwnProperty(key)) {
        const value = formData[key];
        const rules = validationRules[key];

        if (rules.required && !value) {
          errors[key] = "Este campo es requerido.";
          continue; // Si el campo es requerido y está vacío, no sigas con otras validaciones
        }

        if (
          rules.minLength &&
          typeof value === "string" &&
          value.length < rules.minLength
        ) {
          errors[key] = `Debe tener al menos ${rules.minLength} caracteres.`;
        }

        if (
          rules.maxLength &&
          typeof value === "string" &&
          value.length > rules.maxLength
        ) {
          errors[key] = `No puede tener más de ${rules.maxLength} caracteres.`;
        }

        if (
          rules.minValue &&
          typeof value === "number" &&
          value < rules.minValue
        ) {
          errors[key] = `El valor mínimo permitido es ${rules.minValue}.`;
        }

        if (
          rules.maxValue &&
          typeof value === "number" &&
          value > rules.maxValue
        ) {
          errors[key] = `El valor máximo permitido es ${rules.maxValue}.`;
        }

        if (rules.isNumber && typeof value !== "number") {
          errors[key] = "Debe ser un número.";
        }

        if (rules.isPositive && typeof value === "number" && value < 0) {
          errors[key] = "Debe ser un número positivo.";
        }

        if (rules.custom) {
          const customError = rules.custom(value);
          if (customError) {
            errors[key] = customError;
          }
        }
      }
    }

    return errors;
  }

  return { validateForm };
};
