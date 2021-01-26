import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { BackbaseCoreModule } from "@backbase/foundation-ang/core";
import { environment } from "../environments/environment";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";

import { ContainersModule } from "@backbase/universal-ang/containers";
import { ContentWidgetModule } from '@backbase/universal-ang/content';
import { ProductSummaryWidgetAccountSelectorModule, ProductSummaryDetailsWidgetModule } from "@backbase/retail-ang/product-summary";
import { TransactionsListWidgetModule } from "@backbase/retail-ang/transactions";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    HttpClientModule,
    BackbaseCoreModule,
    RouterModule.forRoot([], { initialNavigation: false, useHash: true }),
    ContainersModule,
		ContentWidgetModule,
    ProductSummaryWidgetAccountSelectorModule,
		ProductSummaryDetailsWidgetModule,
    TransactionsListWidgetModule
  ],
  providers: [...(environment.mockProviders || [])],
  bootstrap: [AppComponent]
})
export class AppModule {}
