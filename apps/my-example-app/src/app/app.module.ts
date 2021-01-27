import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BackbaseCoreModule } from "@backbase/foundation-ang/core";
import { environment } from "../environments/environment";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

// Universal-ang
import { ContainersModule } from "@backbase/universal-ang/containers";

// Retail-ang
import { ProductSummaryWidgetAccountSelectorModule } from "@backbase/retail-ang/product-summary";
import { TransactionsListWidgetModule } from "@backbase/retail-ang/transactions";

// Memory Store
import { MemoryStoreFormModule } from "@bbus/memory-store-form";
import { MemoryStoreLogModule } from "@bbus/memory-store-log";

// Custom Store Transports
import { InjectionToken } from "@angular/core";
import { Router } from "@angular/router";
import { createPipelineProcessorConfig } from "@backbase/foundation-ang/core";
import {
  makeCustomStoreTransport,
  CustomStore
} from "@bbus/custom-store-transports";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule.forRoot({
      pipelineProcessors: [
        // Configure the source/sink to be available via the configuration string 'custom-store-transport'
        createPipelineProcessorConfig("custom-store-transport", {
          provide: new InjectionToken("custom store transport"),
          useFactory: makeCustomStoreTransport,
          deps: [Router, CustomStore]
        })
      ]
    }),
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    ContainersModule,
    ProductSummaryWidgetAccountSelectorModule,
    TransactionsListWidgetModule,
    MemoryStoreFormModule,
    MemoryStoreLogModule
  ],
  providers: [...(environment.mockProviders || [])],
  bootstrap: [AppComponent]
})
export class AppModule {}
