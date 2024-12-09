import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { type InvoiceConfiguration } from "../pages/invoice-config/invoice-configuration-view/invoice-configuration.model";

@Injectable({providedIn: 'root'})
export class InvoiceConfigurationService {
    url = "http://localhost:3000/invoiceConfigurations"
    constructor(private client: HttpClient) {
    }

    getInvoiceConfigurations(companyId: number): Observable<InvoiceConfiguration[] | string> {
        return this.retrieveInvoiceConfigsByCompanyId(companyId).pipe(
            map(configurations => {
                const sortedConfigs = configurations.sort(
                (a, b) => new Date(b.activationDateTime).getTime() - new Date(a.activationDateTime).getTime()
                ).slice(0, 3); // Get the three most recent configurations
        
                return sortedConfigs.length > 0 ? sortedConfigs : "No configuration for this company";
            }),
        )
    }
    

    retrieveInvoiceConfigsByCompanyId(companyId: number): Observable<InvoiceConfiguration[]> {
        return this.client.get<InvoiceConfiguration[]>(`${this.url}/?companyId=${companyId}`);
    }

    getInvoiceConfigurationById(id: number): Observable<InvoiceConfiguration[]> {
        return this.client.get<InvoiceConfiguration[]>(`${this.url}/?id=${id}`);
    }

}
