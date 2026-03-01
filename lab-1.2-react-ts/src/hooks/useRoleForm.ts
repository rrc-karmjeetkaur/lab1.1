import { useState } from "react";
import type { Role } from "../types/organization";

export function useRoleForm(onSubmit: (data: Role) => void) {
  const [values, setValues] = useState<Role>({
    firstName: "",
    lastName: "",
    role: ""
  });

  const [errors, setErrors] = useState<string[]>([]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors([]);
    onSubmit(values);
  }

  return {
    values,
    errors,
    setErrors,
    handleChange,
    handleSubmit
  };
}