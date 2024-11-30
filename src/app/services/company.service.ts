import { Injectable } from "@angular/core";
import { COMPANIES } from "../pages/invoice-configuration-view/dummy-invoice-configs";
import { Company } from "../pages/invoice-configuration-view/invoice-configuration.model";

@Injectable({providedIn: 'root'})
export class CompanyService {
    private companies: Company[] = COMPANIES

    getCompanyById(companyId: number) {
        return this.companies.find((company) => company.id === companyId)
    }

    getCompanyByCnpj(cnpj: string) {
        return this.companies.find((company) => company.cnpj === cnpj)
    }

}