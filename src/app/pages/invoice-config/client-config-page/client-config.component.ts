import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ClientConfigService } from '../../../services/client-config.service';

@Component({
  selector: 'app-client-config',
  imports: [FormsModule, RouterLink],
  templateUrl: './client-config.component.html',
  styleUrls: ['./client-config.component.css']
})
export class ClientConfigComponent implements OnInit {
  companies: any[] = [];
  selectedCompanyId: number = 1; // Exemplo de ID da empresa selecionada
  config: any = {
    companyId: this.selectedCompanyId,
    billingCycle: '',
    fiscalDocuments: [],
    validFrom: ''
  };

  constructor(private clientConfigService: ClientConfigService) {}

  ngOnInit(): void {
    // Carregar empresas
    this.clientConfigService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });

    // Carregar configuração mais recente para a empresa selecionada
    this.loadConfig(this.selectedCompanyId);
  }

  loadConfig(companyId: number): void {
    this.clientConfigService.getLastConfig(companyId).subscribe(config => {
      if (config && config.length > 0) {
        this.config = config[0]; // Ajuste caso tenha várias configurações
      }
    });
  }

  saveConfig(): void {
    this.clientConfigService.saveConfig(this.config).subscribe(response => {
      console.log('Configuração salva com sucesso:', response);
    });
  }

  // Método para obter o nome da empresa
  getCompanyName(): string {
    const company = this.companies.find(c => c.id === this.selectedCompanyId);
    return company ? company.name : '';
  }
}
