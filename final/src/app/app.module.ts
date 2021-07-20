import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EntriesComponent } from './entries/entries.component';
import { EntryListComponent } from './entries/entry-list/entry-list.component';
import { EntryDetailComponent } from './entries/entry-detail/entry-detail.component';
import { EntryItemComponent } from './entries/entry-list/entry-item/entry-item.component';
import { AppRoutingModule } from './entries/app-routing.module';
import { EntryStartComponent } from './entries/entry-start/entry-start.component';
import { EntryEditComponent } from './entries/entry-edit/entry-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EntryService } from './entries/entry.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EntriesComponent,
    EntryListComponent,
    EntryDetailComponent,
    EntryItemComponent,
    EntryStartComponent,
    EntryEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [EntryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
