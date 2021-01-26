import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackbaseCoreModule } from '@backbase/foundation-ang/core';
import { MemoryStoreWidgetComponent } from './memory-store-widget.component';

@NgModule({
  declarations: [MemoryStoreWidgetComponent],
  imports: [
    CommonModule,
    BackbaseCoreModule.withConfig({
      classMap: { MemoryStoreWidgetComponent }
    })
  ]
})
export class MemoryStoreWidgetModule { }