import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { MemoryStoreFormComponent } from './memory-store-form.component';

@NgModule({
  declarations: [MemoryStoreFormComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { MemoryStoreFormComponent }
    })
  ]
})
export class MemoryStoreFormModule { }