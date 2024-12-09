import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { of, switchMap } from 'rxjs';
import { SideBarMenuComponent } from "../../../layout/side-bar-menu/side-bar-menu.component";
import { CompanyService } from '../../../services/company.service';
import { InvoiceConfigurationService } from '../../../services/invoice-configuration.service';
import { InvoiceConfigurationMapper } from './invoice-configuration-class';
import { InvoiceConfigData, InvoiceConfiguration } from './invoice-configuration.model';

@Component({
  selector: 'app-invoice-configuration',
  standalone: true,
  imports: [DatePipe, FormsModule, SideBarMenuComponent, RouterLink, RouterOutlet],
  templateUrl: './invoice-configuration.component.html',
  styleUrl: './invoice-configuration.component.css'
})
export class InvoiceConfigurationComponent {
  @Output() titleEvent = new EventEmitter<string>();
  configs: InvoiceConfigData[] = [];
  result!: string | InvoiceConfiguration[];
  showConfigs: boolean = false;
  inputData!: string;
  companyId!: number | string | undefined


  constructor(
    private invoiceConfigService: InvoiceConfigurationService,
    private companyService: CompanyService,
  ) {
    this.sendTitle()
  }

  onSubmitQuery() {
    console.log(this.inputData)
    this.getConfigurationsByInput(this.inputData)
  }
  getConfigurationsByInput(input: string) {
    this.companyService.getCompanyId(input).pipe(
      switchMap((companyId) => {
        this.companyId = companyId
        if (typeof(this.companyId) === 'string') {
          alert(this.companyId);
          return of(null)
        }
        else {
          return this.invoiceConfigService.getInvoiceConfigurations(this.companyId);
        }
        })
    ).subscribe((result) => {
      if (result) {
        this.result = result;
        if (typeof this.result === 'string' || !this.result || this.result.length === 0) {
          alert(this.result);
        } else {
          this.configs = this.result.map(data => new InvoiceConfigurationMapper(data).toObject());
          this.showConfigs = true;
        }
      }
    });

  }
  sendTitle() {
    this.titleEvent.emit("Invoice Configuration View")
  }


}
