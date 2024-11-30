import { Injectable } from "@angular/core";
import { InputValidator } from "../helpers/utils";
import { INVOICE_CONFIGURATIONS } from "../pages/invoice-configuration-view/dummy-invoice-configs";
import { InvoiceConfiguration } from "../pages/invoice-configuration-view/invoice-configuration.model";
import { CompanyService } from "./company.service";

@Injectable({providedIn: 'root'})
export class InvoiceConfigurationService {
    private configurations = INVOICE_CONFIGURATIONS

    constructor(private companyService: CompanyService) {}

    getInvoiceConfigurations(input: string): InvoiceConfiguration[] | string {
        let filteredConfigs: InvoiceConfiguration[] = []
        if (InputValidator.isValidCnpj(input)) {
            let cleanedCnpj = input.replace(/\D/g, '');
            const company = this.companyService.getCompanyByCnpj(cleanedCnpj)
            if (company) {
                filteredConfigs = this.retrieveInvoiceConfigsByCompanyId(company.id)
            }
            else {
                return "No Company with this cnpj: " + cleanedCnpj
            }
        }
        else if (InputValidator.isValidCompanyId(input)) {
            let companyId: number = Number(input)
            filteredConfigs = this.retrieveInvoiceConfigsByCompanyId(companyId)
        }
        
        return filteredConfigs.length > 0 ? filteredConfigs : "No configuration for this company"
    }

    retrieveInvoiceConfigsByCompanyId(companyId: number): InvoiceConfiguration[] {
        return this.configurations.filter(
            (config) => config.companyId === companyId
        ).sort(
            (a, b) => new Date(b.activationDateTime).getTime() - new Date(a.activationDateTime).getTime()
        ).slice(0, 3); // Get the three most recent configurations
    }

}