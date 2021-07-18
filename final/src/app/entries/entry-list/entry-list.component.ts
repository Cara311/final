import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  //@Output() entryWasSelected = new EventEmitter<Entry>();
  //@Output() entryWasSelected = new EventEmitter<Entry>();
  entries!: Entry[];
  subscription!: Subscription;


  constructor(private entryService: EntryService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this.entryService.entriesChanged
      .subscribe(
        (entries: Entry[]) => {
          this.entries = entries;
        }
      );
    this.entries = this.entryService.getEntries();
  }
 /* onEntrySelected(entry: Entry) {
    this.entryWasSelected.emit(entry);
   } */
   onNewEntry() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
