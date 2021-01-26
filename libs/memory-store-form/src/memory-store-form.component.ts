import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface AccountInfo {
	id: string;
	name: string;
	owner: string;
}

@Component({
  selector: 'bbus-memory-store-form',
  templateUrl: './memory-store-form.component.html'
})
export class MemoryStoreFormComponent implements OnInit {
  @Input() selectedAccountId = '';
	
	@Output() submitAccountInfo = new EventEmitter<AccountInfo>();

  accountForm = new FormGroup({
    name: new FormControl('an account name', [Validators.required]),
    owner: new FormControl('an account owner', [Validators.required])
  });

  constructor() {}

  ngOnInit(): void {}
	
	onSubmit() {
		const accountInfoObj: AccountInfo = {
			id: this.selectedAccountId,
			...this.accountForm.value
		};
		this.submitAccountInfo.emit(accountInfoObj);
	}
}
