import { BillingCycle, FiscalDocument, InvoiceConfigData, InvoiceConfiguration } from "./invoice-configuration.model";

export class InvoiceConfigurationMapper implements InvoiceConfiguration {
    companyId: number;
    activationDateTime: Date;
    billingCycle: BillingCycle;
    fiscalDocuments: FiscalDocument[];

    constructor(data: InvoiceConfiguration) {
        this.companyId = data.companyId;
        this.activationDateTime = data.activationDateTime;
        this.billingCycle = data.billingCycle;
        this.fiscalDocuments = data.fiscalDocuments; 
    }

    toObject(): InvoiceConfigData {
        return {
            companyId: String(this.companyId),
            activationDateTime: String(this.activationDateTime),
            billingCycle: BillingCycle[this.billingCycle],
            fiscalDocuments: this.fiscalDocuments.map(doc => FiscalDocument[doc])
        }
    }
}
