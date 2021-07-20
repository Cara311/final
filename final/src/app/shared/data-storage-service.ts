import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';

import { Entry } from '../entries/entry.model';
import { EntryService } from '../entries/entry.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(private http: HttpClient, private entryService: EntryService) {}

  storeEntries() {
    const entries = this.entryService.getEntries();
    this.http
      .put(
        'https://final-6cb13-default-rtdb.firebaseio.com/entries.json',
        entries
      )
      .subscribe(response => {
        console.log(response);
      });
  }

  fetchEntries() {
    return this.http
      .get<Entry[]>(
        'https://final-6cb13-default-rtdb.firebaseio.com/entries.json'
      ).subscribe(entries => {
          console.log(entries);
          this.entryService.setEntries(entries);
      })
       /* .pipe(
        map(entries => {
          return entries.map(entry => {
            return {
              ...entry
              //ingredients: recipe.ingredients ? recipe.ingredients : []
            };
          });
        }),
        tap(entries => {
          this.entryService.setEntries(entries);
        }) 
      ) */
  }
}
