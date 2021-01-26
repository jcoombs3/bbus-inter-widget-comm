import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bbus-memory-store-widget',
  templateUrl: './memory-store-widget.component.html'
})
export class MemoryStoreWidgetComponent implements OnInit {
	@Input() selectedMemoryStoreData = {};
	
  constructor() { }

  ngOnInit(): void {
  }
}
