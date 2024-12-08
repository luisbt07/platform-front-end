import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientConfigService {
  private companiesUrl = 'http://localhost:3000/companies'; // URL para as empresas
  private invoiceConfigurationsUrl = 'http://localhost:3000/invoiceConfigurations'; // URL para as configurações de fatura

  constructor(private http: HttpClient) { }

  // Obter todas as empresas
  getCompanies(): Observable<any[]> {
    return this.http.get<any[]>(this.companiesUrl);
  }

  // Obter a última configuração de fatura por ID da empresa
  getLastConfig(companyId: number): Observable<any> {
    return this.http.get<any>(`${this.invoiceConfigurationsUrl}?companyId=${companyId}&_sort=activationDateTime&_order=desc&_limit=1`);
  }

  // Salvar nova configuração de fatura
  saveConfig(config: any): Observable<any> {
    return this.http.post(this.invoiceConfigurationsUrl, config);
  }
}
