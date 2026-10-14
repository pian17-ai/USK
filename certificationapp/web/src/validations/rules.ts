import type { SchemeState } from "../types/scheme.type";
import type { UserState } from "../types/user.type";
import {
  required,
  optional,
  minLength,
  letters,
  numeric,
  digits,
  digitsBetween,
  email,
  validDate,
  selected,
  uniqueIn,
  type Validator,
} from "./validators";

export const loginRules: Record<string, Validator[]> = {
  username: [required("Username")],
  password: [required("Password")],
};

export const registerRules: Record<string, Validator[]> = {
  username: [required("Username")],
  password: [required("Password"), minLength(6, "Password")],
  full_name: [required("Nama Lengkap"), letters("Nama Lengkap")],
  nik: [required("NIK"), numeric("NIK"), digits(16, "NIK")],
  email: [required("Email"), email("Email")],
  phone_number: [
    required("Nomor Telepon"),
    numeric("Nomor Telepon"),
    digitsBetween(11, 13, "Nomor Telepon"),
  ],
  born_date: [required("Tanggal Lahir"), validDate("Tanggal Lahir")],
  gender: [required("Jenis Kelamin")],
  address: [required("Alamat")],
};

export const userRules = (
  users: UserState[],
  options: { isEdit?: boolean; currentUsername?: string } = {},
): Record<string, Validator[]> => ({
  username: [
    required("Username"),
    uniqueIn(
      users,
      (user) => user.username,
      "Username",
      options.currentUsername,
    ),
  ],
  password: options.isEdit
    ? [optional(minLength(6, "Password"))]
    : [required("Password"), minLength(6, "Password")],
});

export const schemeRules = (
  schemes: SchemeState[],
  options: { currentCode?: string } = {},
): Record<string, Validator[]> => ({
  scheme_code: [
    required("Scheme Code"),
    uniqueIn(
      schemes,
      (scheme) => scheme.scheme_code,
      "Scheme Code",
      options.currentCode,
    ),
  ],
  scheme_name: [required("Scheme Name")],
  description: [required("Description")],
});

export const candidateRules: Record<string, Validator[]> = {
  user_id: [selected("User")],
  full_name: [required("Nama Lengkap"), letters("Nama Lengkap")],
  nik: [required("NIK"), numeric("NIK"), digits(16, "NIK")],
  email: [required("Email"), email("Email")],
  phone_number: [
    required("Nomor Telepon"),
    numeric("Nomor Telepon"),
    digitsBetween(11, 13, "Nomor Telepon"),
  ],
  born_date: [required("Tanggal Lahir"), validDate("Tanggal Lahir")],
  gender: [required("Jenis Kelamin")],
  address: [required("Alamat")],
};

export const profileRules: Record<string, Validator[]> = {
  username: [required("Username"), letters("Username")],
  full_name: [required("Nama Lengkap"), letters("Nama Lengkap")],
  nik: [required("NIK"), numeric("NIK"), digits(16, "NIK")],
  email: [required("Email"), email("Email")],
  phone_number: [
    required("Nomor Telepon"),
    numeric("Nomor Telepon"),
    digitsBetween(11, 13, "Nomor Telepon"),
  ],
  born_date: [required("Tanggal Lahir"), validDate("Tanggal Lahir")],
  gender: [required("Jenis Kelamin")],
  address: [required("Alamat")],
};

export const templateCandidateRules: Record<string, Validator[]> = {
  participant_number: [required("Nomor Peserta")],
  full_name: [required("Nama Lengkap"), letters("Nama Lengkap")],
  email: [required("Email"), email("Email")],
  phone_number: [
    required("Nomor Telepon"),
    numeric("Nomor Telepon"),
    digitsBetween(11, 13, "Nomor Telepon"),
  ],
  born_date: [required("Tanggal Lahir"), validDate("Tanggal Lahir")],
  gender: [required("Jenis Kelamin")],
  address: [required("Alamat")],
};

export const templateSchemeRules: Record<string, Validator[]> = {
  scheme_code: [required("Scheme Code")],
  scheme_name: [required("Scheme Name")],
  description: [required("Description")],
};

export const templateUserRules: Record<string, Validator[]> = {
  full_name: [required("Nama Lengkap"), letters("Nama Lengkap")],
  username: [required("Username")],
  password: [required("Password"), minLength(6, "Password")],
};
