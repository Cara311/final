import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Entry } from '../entry.model';
import { EntryService } from '../entry.service';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  entry!: Entry;
  id!: number;
  constructor(private entryService: EntryService,
    private route: ActivatedRoute,
    private router: Router) {
}
  

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.entry = this.entryService.getEntry(this.id);
        }
      );
  }

  onEditEntry() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteEntry() {
    this.entryService.deleteEntry(this.id);
    this.router.navigate(['/entries']);
  }

}
