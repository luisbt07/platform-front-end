import { Component, Input, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { InvoiceConfigurationService } from '../../../services/invoice-configuration.service';
import { InvoiceConfigurationMapper } from '../invoice-configuration-view/invoice-configuration-class';
import { InvoiceConfigData } from '../invoice-configuration-view/invoice-configuration.model';

@Component({
  selector: 'app-client-config',
  imports: [FormsModule, RouterLink],
  templateUrl: './client-config.component.html',
  styleUrls: ['./client-config.component.css']
})
export class ClientConfigComponent implements OnInit {
  @Input({required: true}) configId!: string;
  selectedCompanyId: number = 1; // Exemplo de ID da empresa selecionada

  config!: InvoiceConfigData

  constructor(private invoiceConfigService: InvoiceConfigurationService) {}

  ngOnInit(): void {
    // Carregar empresas
    this.invoiceConfigService.getInvoiceConfigurationById(Number(this.configId)).subscribe(configData => {
      this.config = configData.map(data => new InvoiceConfigurationMapper(data).toObject())[0];
    });

    // Carregar configuração mais recente para a empresa selecionada
    // this.loadConfig(this.selectedCompanyId);
  }

  // loadConfig(companyId: number): void {
  //   this.clientConfigService.getLastConfig(companyId).subscribe(config => {
  //     if (config && config.length > 0) {
  //       this.config = config[0]; // Ajuste caso tenha várias configurações
  //     }
  //   });
  // }

  // saveConfig(): void {
  //   this.clientConfigService.saveConfig(this.config).subscribe(response => {
  //     console.log('Configuração salva com sucesso:', response);
  //   });
  // }

  // // Método para obter o nome da empresa
  // getCompanyName(): string {
  //   const company = this.companies.find(c => c.id === this.selectedCompanyId);
  //   return company ? company.name : '';
  // }
}
