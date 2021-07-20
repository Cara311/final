/* import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';

import { Entry } from './entry.model';
import { DataStorageService } from '../shared/data-storage-service';
import { EntryService } from './entry.service';

@Injectable({ providedIn: 'root' })
export class EntriesResolverService implements Resolve<Entry[]> {
  constructor(
    private dataStorageService: DataStorageService,
    private entryService: EntryService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const entries = this.entryService.getEntries();

    if (entries.length === 0) {
      return this.dataStorageService.fetchEntries();
    } else {
      return entries;
    }
  }
} 