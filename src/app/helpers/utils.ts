import { cnpj } from "cpf-cnpj-validator";

export class InputValidator {
    static isValidCompanyId(input: string): boolean {
      // Check if the input is a valid numeric string (positive integer)
      return !isNaN(Number(input)) && Number(input) > 0;
    }
  
    static isValidCnpj(input: string): boolean {
        return cnpj.isValid(input)
    }
  }