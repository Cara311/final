import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryListComponent } from './entries/entry-list/entry-list.component';
import { EntryDetailComponent } from './entries/entry-detail/entry-detail.component';
import { EntryItemComponent } from './entries/entry-list/entry-item/entry-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntriesComponent,
    EntryListComponent,
    EntryDetailComponent,
    EntryItemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
