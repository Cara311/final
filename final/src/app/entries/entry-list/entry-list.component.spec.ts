import { Component, OnInit } from '@angular/core';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-entry-detail',
  templateUrl: './entry-detail.component.html',
  styleUrls: ['./entry-detail.component.css']
})
export class EntryDetailComponent implements OnInit {
  entries: Entry[] = [
    new Entry('7/12/21', 'Today I ate cheese', 'https://images.unsplash.com/photo-1596854650262-2c415cb9f3ee?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80')
  ];

  constructor() { }

  ngOnInit() {
  }
}