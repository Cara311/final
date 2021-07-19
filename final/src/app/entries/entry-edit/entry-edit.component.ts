import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { EntryService } from '../entry.service';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';



@Component({
  selector: 'app-entry-edit',
  templateUrl: './entry-edit.component.html',
  styleUrls: ['./entry-edit.component.css']
})
export class EntryEditComponent implements OnInit {
  [x: string]: any;
  id!: number;
  editMode = false;
  entryForm!: FormGroup;
  
  constructor(private route: ActivatedRoute,
    private entryService: EntryService,
    private router: Router) {
}

  ngOnInit(): void {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }



  onSubmit() {
     if (this.editMode) {
      this.entryService.updateEntry(this.id, this.entryForm.value);
    } else {
      this.entryService.addEntry(this.entryForm.value);
    }
    this.onCancel(); 
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
    let entryName = '';
    let entryImagePath = '';
    let entryDescription = '';

    if (this.editMode) {
      const entry = this.entryService.getEntry(this.id);
      entryName = entry.name;
      entryImagePath = entry.imagePath;
      entryDescription = entry.description;
    }
    this.entryForm = new FormGroup({
      'name': new FormControl(entryName, Validators.required),
      'imagePath': new FormControl(entryImagePath, Validators.required),
      'description': new FormControl(entryDescription, Validators.required)
    });
  }
  }




