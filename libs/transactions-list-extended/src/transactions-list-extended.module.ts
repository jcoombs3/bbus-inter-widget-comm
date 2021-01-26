import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { TransactionsListWidgetModule } from "@backbase/retail-ang/transactions";
import { TransactionsListExtendedComponent } from './transactions-list-extended.component';

@NgModule({
  declarations: [TransactionsListExtendedComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { TransactionsListExtendedComponent }
    }),
		TransactionsListWidgetModule
  ]
})
export class TransactionsListExtendedModule { }