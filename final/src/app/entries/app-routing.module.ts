import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntriesComponent } from './entries.component';
import { EntryStartComponent } from './entry-start/entry-start.component';
import { EntryDetailComponent } from './entry-detail/entry-detail.component';
import { EntryEditComponent } from './entry-edit/entry-edit.component';
//import { EntriesResolverService } from './entries-resolver.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/entries', pathMatch: 'full' },
  { path: 'entries', component: EntriesComponent, children: [
    { path: '', component: EntryStartComponent },
    { path: 'new', component: EntryEditComponent },
    { path: ':id', component: EntryDetailComponent},
    { path: ':id/edit', component: EntryEditComponent},
    //{ path: ':id', component: EntryDetailComponent, resolve: [EntriesResolverService] },
    //{ path: ':id/edit', component: EntryEditComponent, resolve: [EntriesResolverService] },
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}