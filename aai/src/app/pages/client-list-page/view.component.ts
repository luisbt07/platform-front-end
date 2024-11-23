import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  imports: [CommonModule],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})

export class ViewComponent {
  clientes = [
    { nome: 'Kadin Herwitz', cnpj: '12.3425.678/9101-11', ciclo: 'Mensal', docs: 'CTE', criadoEm: '01/01/2023' },
    // Adicione mais objetos conforme necessário
  ];
}
