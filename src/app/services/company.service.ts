import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable, of } from "rxjs";
import { InputValidator } from "../helpers/utils";
import { type Company } from "../pages/invoice-configuration-view/invoice-configuration.model";

@Injectable({providedIn: 'root'})
export class CompanyService {
    url = "http://localhost:3000/companies"
    constructor(private client: HttpClient) {
    }
    getCompanyById(companyId: number): Observable<Company> {
        return this.client.get<Company>(`${this.url}/companies/?id=${companyId}`);
    }

    getCompanyByCnpj(cnpj: string): Observable<Company[]> {
        return this.client.get<Company[]>(`${this.url}/companies/?cnpj=${cnpj}`);
    }

    getCompanyId(input: string): Observable<number | string> {
        if (InputValidator.isValidCnpj(input)) {
            let cleanedCnpj = input.replace(/\D/g, '');
            return this.getCompanyByCnpj(cleanedCnpj).pipe(
                map((companies) => companies.length > 0 ? Number(companies[0].id) : `No Company with this cnpj: ${input}`)
            );
        }
        else if (InputValidator.isValidCompanyId(input)) {
            return of(Number(input));
        }
        else {
            return of(`No Company with this id: ${input}`)
        }
    }
}
