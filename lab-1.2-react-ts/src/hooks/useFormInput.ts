import { useState } from "react";

export function useFormInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [messages, setMessages] = useState<string[]>([]);

  function validate(callback: (value: string) => string[]) {
    const result = callback(value);
    setMessages(result);
    return result;
  }

  return {
    value,
    setValue,
    messages,
    validate,
    clearMessages: () => setMessages([])
  };
}
