import { BillingCycle, Company, FiscalDocument, InvoiceConfiguration } from "./invoice-configuration.model";

export const INVOICE_CONFIGURATIONS: InvoiceConfiguration[] = [
    {
      companyId: 1,
      activationDateTime: new Date("2024-10-20T10:00:00Z"),
      billingCycle: BillingCycle.Mensal,
      fiscalDocuments: [FiscalDocument.InvoiceReport, FiscalDocument.CteZip]
    },
    {
      companyId: 1,
      activationDateTime: new Date("2024-12-01T15:00:00Z"),
      billingCycle: BillingCycle.Custom,
      fiscalDocuments: [FiscalDocument.NfseZip]
    },
    {
      companyId: 2,
      activationDateTime: new Date("2024-09-15T12:00:00Z"),
      billingCycle: BillingCycle.Quinzenal,
      fiscalDocuments: [FiscalDocument.InvoiceReport, FiscalDocument.CteZip]
    },
    {
      companyId: 2,
      activationDateTime: new Date("2024-11-25T14:00:00Z"),
      billingCycle: BillingCycle.Mensal,
      fiscalDocuments: [FiscalDocument.NfseZip]
    },
    {
      companyId: 3,
      activationDateTime: new Date("2024-08-10T09:30:00Z"),
      billingCycle: BillingCycle.Custom,
      fiscalDocuments: [FiscalDocument.CteZip]
    },
    {
      companyId: 3,
      activationDateTime: new Date("2024-12-10T11:30:00Z"),
      billingCycle: BillingCycle.Quinzenal,
      fiscalDocuments: [FiscalDocument.InvoiceReport, FiscalDocument.NfseZip]
    },
    {
      companyId: 4,
      activationDateTime: new Date("2024-07-01T10:45:00Z"),
      billingCycle: BillingCycle.Mensal,
      fiscalDocuments: [FiscalDocument.InvoiceReport, FiscalDocument.CteZip]
    },
    {
      companyId: 4,
      activationDateTime: new Date("2024-12-15T16:00:00Z"),
      billingCycle: BillingCycle.Custom,
      fiscalDocuments: [FiscalDocument.NfseZip]
    },
    {
      companyId: 5,
      activationDateTime: new Date("2024-09-20T14:30:00Z"),
      billingCycle: BillingCycle.Quinzenal,
      fiscalDocuments: [FiscalDocument.CteZip, FiscalDocument.NfseZip]
    },
    {
      companyId: 5,
      activationDateTime: new Date("2024-12-22T13:00:00Z"),
      billingCycle: BillingCycle.Mensal,
      fiscalDocuments: [FiscalDocument.InvoiceReport]
    },
    {
      companyId: 6,
      activationDateTime: new Date("2024-08-30T11:00:00Z"),
      billingCycle: BillingCycle.Custom,
      fiscalDocuments: [FiscalDocument.NfseZip, FiscalDocument.CteZip]
    },
    {
      companyId: 6,
      activationDateTime: new Date("2024-12-25T12:00:00Z"),
      billingCycle: BillingCycle.Quinzenal,
      fiscalDocuments: [FiscalDocument.InvoiceReport]
    },
    {
      companyId: 7,
      activationDateTime: new Date("2024-10-05T08:00:00Z"),
      billingCycle: BillingCycle.Mensal,
      fiscalDocuments: [FiscalDocument.CteZip, FiscalDocument.InvoiceReport]
    },
    {
      companyId: 7,
      activationDateTime: new Date("2024-12-28T17:00:00Z"),
      billingCycle: BillingCycle.Custom,
      fiscalDocuments: [FiscalDocument.NfseZip]
    },
    {
      companyId: 8,
      activationDateTime: new Date("2024-09-12T09:15:00Z"),
      billingCycle: BillingCycle.Quinzenal,
      fiscalDocuments: [FiscalDocument.InvoiceReport]
    },
    {
      companyId: 8,
      activationDateTime: new Date("2024-12-03T10:00:00Z"),
      billingCycle: BillingCycle.Mensal,
      fiscalDocuments: [FiscalDocument.NfseZip, FiscalDocument.CteZip]
    },
    {
      companyId: 9,
      activationDateTime: new Date("2024-07-15T07:30:00Z"),
      billingCycle: BillingCycle.Custom,
      fiscalDocuments: [FiscalDocument.CteZip, FiscalDocument.NfseZip]
    },
    {
      companyId: 9,
      activationDateTime: new Date("2024-11-30T15:45:00Z"),
      billingCycle: BillingCycle.Quinzenal,
      fiscalDocuments: [FiscalDocument.InvoiceReport]
    },
    {
      companyId: 10,
      activationDateTime: new Date("2024-10-10T10:45:00Z"),
      billingCycle: BillingCycle.Mensal,
      fiscalDocuments: [FiscalDocument.InvoiceReport, FiscalDocument.CteZip]
    },
    {
      companyId: 10,
      activationDateTime: new Date("2024-12-29T18:30:00Z"),
      billingCycle: BillingCycle.Custom,
      fiscalDocuments: [FiscalDocument.NfseZip]
    }
  ];


export const COMPANIES: Company[] = [
    { "id": 1, "cnpj": "87757416000137", "name": "Alpha Solutions LTDA" },
    { "id": 2, "cnpj": "12735163000100", "name": "Beta Enterprises S/A" },
    { "id": 3, "cnpj": "18831678000181", "name": "Gamma Tech Innovations" },
    { "id": 4, "cnpj": "31961775000157", "name": "Delta Logistics Group" },
    { "id": 5, "cnpj": "64108330000188", "name": "Epsilon Financial Services" },
    { "id": 6, "cnpj": "97602494000116", "name": "Zeta Manufacturing Co." },
    { "id": 7, "cnpj": "51498088000154", "name": "Eta Digital Solutions" },
    { "id": 8, "cnpj": "71547574000122", "name": "Theta Construction LLC" },
    { "id": 9, "cnpj": "28936996000160", "name": "Iota Energy Providers" },
    { "id": 10, "cnpj": "44099337000173", "name": "Kappa Food Supplies" }
]
