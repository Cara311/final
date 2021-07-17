
import { EventEmitter } from "@angular/core";
import { Entry } from "./entry.model";

export class EntryService {
    entrySelected = new EventEmitter<Entry>();

    private entries: Entry[] = [
        new Entry('7/12/21', 'Today I ate cheese', 'https://images.unsplash.com/photo-1596854650262-2c415cb9f3ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'),
        new Entry('7/20/21', 'Today I ran.', 'https://images.pexels.com/photos/3487734/pexels-photo-3487734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
      ];

    getEntries() {
        return this.entries.slice();
    }  
}