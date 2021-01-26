import { Component, OnInit, Input } from '@angular/core';
import { AccountInfo } from '@bbus/memory-store-form';

@Component({
  selector: 'bbus-memory-store-log',
  templateUrl: './memory-store-log.component.html'
})
export class MemoryStoreLogComponent implements OnInit {
  @Input() submittedAccountInfo = '';

  constructor() {}

  ngOnInit(): void {}
}
