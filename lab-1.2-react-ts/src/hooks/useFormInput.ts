import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [errors, setErrors] = useState<string[]>([]);

  function validate(validator: (value: string) => string[]) {
    const validationErrors = validator(value);
    setErrors(validationErrors);
    return validationErrors;
  }

  function reset() {
    setValue(initialValue);
    setErrors([]);
  }

  return {
    value,
    setValue,
    errors,
    validate,
    reset
  };
}
