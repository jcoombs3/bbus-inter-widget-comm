import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PipelineSink, PipelineSource } from '@backbase/foundation-ang/core';
import { Observable, BehaviorSubject } from 'rxjs';

// Factory to create the sink/source
export const makeCustomStoreTransport = (
  router: Router,
  store: CustomStore
): PipelineSink<string> & PipelineSource<string | undefined> => ({
  sink: (url: string) => (stdin: Observable<string>) => {
    stdin.subscribe((id: string) => {
      store.selectAccount(id);
      router.navigate([url, { selectedAccount: id }]);
    });
  },
  source: (/* custom arguments here */) => () => store.$selectedAccount
});

// Custom store to hold the shared data
@Injectable({ providedIn: 'root' })
export class CustomStore {
  $selectedAccount = new BehaviorSubject<string | undefined>(undefined);
  selectAccount(id: string) {
    this.$selectedAccount.next(id);
  }
}
