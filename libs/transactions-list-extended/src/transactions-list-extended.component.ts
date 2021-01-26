import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'bbus-transactions-list-extended',
  template: `
		<p *ngIf='selectedAccountId'><strong>selectedAccountId:</strong>&nbsp;{{ selectedAccountId }}</p>
<button (click)="foobar()" class="btn btn-primary">foobar</button>
    <bb-transactions-list-widget></bb-transactions-list-widget>
  `,
  styles: []
})
export class TransactionsListExtendedComponent implements OnInit {
  /**
   * @description
   * input when selecting an account
   */
  @Input()
  selectedAccountId = '';
  /**
   * @description
   * configurable output when selecting a product
   */
  @Output() 
  selectedMemoryStoreData = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
		console.log('++ ngOnInit this.selectedAccountId', this.selectedAccountId);
	}
	
	foobar() {
		const obj = {
			foobar: "hello world"
		};
		
		console.log('++ foobar');
		
		this.selectedMemoryStoreData.emit(obj);
	}
}
