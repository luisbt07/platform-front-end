import { Component } from '@angular/core';

@Component({
  selector: 'app-client-view',
  imports: [],
  templateUrl: './client-view.component.html',
  styleUrl: './client-view.component.css'
})
export class ClientViewComponent {
  clientes = [
    { nome: 'Kadin Herwitz', cnpj: '12.3425.678/9101-11', ciclo: 'Mensal', docs: 'CTE', criadoEm: '01/01/2023' },
    // Adicione mais objetos conforme necessário
  ];
}
