import { Component, OnInit } from '@angular/core';
import { Entry } from './entry.model';
import { EntryService } from './entry.service';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css'],
  providers: [EntryService]
})
export class EntriesComponent implements OnInit {
  //selectedEntry: Entry | undefined;

  //constructor(private entryService: EntryService) { }
  constructor() { }

  ngOnInit(): void {
    /* this.entryService.entrySelected.subscribe(
      (entry: Entry) => {
        this.selectedEntry = entry;
      }
    ) */

  }

}
