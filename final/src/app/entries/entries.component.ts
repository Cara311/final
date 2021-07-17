import { Component, OnInit } from '@angular/core';
import { Entry } from './entry.model';

@Component({
  selector: 'app-entries',
  templateUrl: './entries.component.html',
  styleUrls: ['./entries.component.css']
})
export class EntriesComponent implements OnInit {
  selectedEntry: Entry | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
