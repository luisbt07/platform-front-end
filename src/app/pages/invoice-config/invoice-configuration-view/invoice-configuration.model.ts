export interface InvoiceConfiguration {
    id: number;
    companyId: number;
    activationDateTime: Date;
    billingCycle: BillingCycle;
    fiscalDocuments: FiscalDocument[];
}

export interface  InvoiceConfigData {
    id: string;
    companyId: string;
    activationDateTime: string;
    billingCycle: string;
    fiscalDocuments: string[];
}

export enum BillingCycle {
    Quinzenal = 1,
    Mensal = 2,
    Custom = 3
}

export enum FiscalDocument {
    InvoiceReport = 1,
    CteZip = 2,
    NfseZip = 3
}

export interface Company {
    id: number;
    cnpj: string;
    name: string;
}
