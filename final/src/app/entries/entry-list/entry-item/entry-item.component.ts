import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Entry } from '../../entry.model';
import { EntryService } from '../../entry.service';

@Component({
  selector: 'app-entry-item',
  templateUrl: './entry-item.component.html',
  styleUrls: ['./entry-item.component.css']
})
export class EntryItemComponent implements OnInit {

  @Input()
  entry!: Entry;
  //@Output() entrySelected = new EventEmitter<void>();

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
  }
  onSelected() {
   // this.entrySelected.emit();
   this.entryService.entrySelected.emit(this.entry);
  }

}
