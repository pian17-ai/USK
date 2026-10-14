export type Validator = (value: unknown) => string;

export type FormErrors = Record<string, string>;

const isEmpty = (value: unknown): boolean =>
  value === undefined || value === null || String(value).trim() === "";

export const required =
  (label: string): Validator =>
  (value) =>
    isEmpty(value) ? `${label} wajib diisi` : "";

export const optional =
  (validator: Validator): Validator =>
  (value) =>
    isEmpty(value) ? "" : validator(value);

export const minLength =
  (min: number, label: string): Validator =>
  (value) => {
    if (isEmpty(value)) return "";
    return String(value).length >= min
      ? ""
      : `${label} minimal ${min} karakter`;
  };

export const letters =
  (label: string): Validator =>
  (value) => {
    if (isEmpty(value)) return "";
    return /^[a-zA-Z ]{1,50}$/.test(String(value))
      ? ""
      : `${label} hanya boleh berisi huruf dan spasi (maksimal 50 karakter)`;
  };

export const numeric =
  (label: string): Validator =>
  (value) => {
    if (isEmpty(value)) return "";
    return /^[0-9]+$/.test(String(value))
      ? ""
      : `${label} harus berupa angka`;
  };

export const digits =
  (length: number, label: string): Validator =>
  (value) => {
    if (isEmpty(value)) return "";
    return new RegExp(`^[0-9]{${length}}$`).test(String(value))
      ? ""
      : `${label} harus berupa ${length} digit angka`;
  };

export const digitsBetween =
  (min: number, max: number, label: string): Validator =>
  (value) => {
    if (isEmpty(value)) return "";
    return new RegExp(`^[0-9]{${min},${max}}$`).test(String(value))
      ? ""
      : `${label} harus berupa ${min}-${max} digit angka`;
  };

export const email =
  (label: string): Validator =>
  (value) => {
    if (isEmpty(value)) return "";
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value))
      ? ""
      : `${label} tidak valid`;
  };

export const validDate =
  (label: string): Validator =>
  (value) => {
    if (isEmpty(value)) return "";
    return Number.isNaN(Date.parse(String(value)))
      ? `${label} tidak valid`
      : "";
  };

export const selected =
  (label: string): Validator =>
  (value) => {
    if (isEmpty(value) || String(value).trim() === "0") {
      return `${label} wajib dipilih`;
    }
    return "";
  };

export const uniqueIn =
  <T>(
    list: T[],
    getValue: (item: T) => string,
    label: string,
    currentValue?: string,
  ): Validator =>
  (value) => {
    if (isEmpty(value)) return "";

    const input = String(value).trim().toLowerCase();

    if (
      currentValue !== undefined &&
      input === String(currentValue).trim().toLowerCase()
    ) {
      return "";
    }

    const isUsed = list.some(
      (item) => String(getValue(item) ?? "").trim().toLowerCase() === input,
    );

    return isUsed ? `${label} sudah digunakan` : "";
  };

export const validateField = (
  validators: Validator[],
  value: unknown,
): string => {
  for (const validator of validators) {
    const message = validator(value);
    if (message) return message;
  }
  return "";
};

export const validateForm = <T extends object>(
  values: T,
  rules: Partial<Record<keyof T, Validator[]>>,
): FormErrors => {
  const errors: FormErrors = {};

  (Object.keys(rules) as (keyof T)[]).forEach((field) => {
    const fieldValidators = rules[field];
    if (!fieldValidators) return;

    const message = validateField(
      fieldValidators,
      (values as Record<string, unknown>)[field as string],
    );

    if (message) errors[field as string] = message;
  });

  return errors;
};

export const hasErrors = (errors: FormErrors): boolean =>
  Object.values(errors).some((message) => !!message);

export const fieldClass = (errors: FormErrors, field: string): string =>
  errors[field] ? "is-invalid" : "";
