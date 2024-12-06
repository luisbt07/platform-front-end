import { Injectable } from "@angular/core";
import { INVOICE_CONFIGURATIONS } from "../pages/invoice-configuration-view/dummy-invoice-configs";
import { type InvoiceConfiguration } from "../pages/invoice-configuration-view/invoice-configuration.model";

@Injectable({providedIn: 'root'})
export class InvoiceConfigurationService {
    private configurations = INVOICE_CONFIGURATIONS

    getInvoiceConfigurations(companyId: number): InvoiceConfiguration[] | string {
        let filteredConfigs: InvoiceConfiguration[] = []

        filteredConfigs = this.retrieveInvoiceConfigsByCompanyId(companyId)

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
