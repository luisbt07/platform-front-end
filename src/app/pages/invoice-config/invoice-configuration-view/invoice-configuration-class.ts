import { BillingCycle, FiscalDocument, InvoiceConfigData, InvoiceConfiguration } from "./invoice-configuration.model";

export class InvoiceConfigurationMapper implements InvoiceConfiguration {
    id: number;
    companyId: number;
    activationDateTime: Date;
    billingCycle: BillingCycle;
    fiscalDocuments: FiscalDocument[];

    constructor(data: InvoiceConfiguration) {
        console.log(data)
        this.id = data.id;
        this.companyId = data.companyId;
        this.activationDateTime = data.activationDateTime;
        this.billingCycle = data.billingCycle;
        this.fiscalDocuments = data.fiscalDocuments; 
    }

    toObject(): InvoiceConfigData {
        return {
            id: String(this.id),
            companyId: String(this.companyId),
            activationDateTime: String(this.activationDateTime),
            billingCycle: BillingCycle[this.billingCycle],
            fiscalDocuments: this.fiscalDocuments.map(doc => FiscalDocument[doc])
        }
    }
}
