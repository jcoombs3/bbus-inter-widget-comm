import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { MemoryStoreLogComponent } from './memory-store-log.component';

@NgModule({
  declarations: [MemoryStoreLogComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { MemoryStoreLogComponent }
    })
  ]
})
export class MemoryStoreLogModule { }