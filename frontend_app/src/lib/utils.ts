import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import axios from "axios"
import config from "@/config"
import type { LoginFormValues, RegisterFormValues } from "./Schema"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const apiServices = {
  register: async function({values}: {values: RegisterFormValues}) {
    console.log('registering')

    const response = axios
    .post(`${config.api.baseUrl}/api/register/`, values)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    console.log(response)
  },
  login: function({values}: {values: LoginFormValues}) {
    console.log('logging in')

    const response = axios
    .post(`${config.api.baseUrl}/token/`, values)
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log(err)
    })
    console.log(response)
  },
}