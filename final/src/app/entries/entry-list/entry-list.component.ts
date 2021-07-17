import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  //@Output() entryWasSelected = new EventEmitter<Entry>();
  entries: Entry[] = [];


  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entries = this.entryService.getEntries();
  }
 /* onEntrySelected(entry: Entry) {
    this.entryWasSelected.emit(entry);
   } */

}
