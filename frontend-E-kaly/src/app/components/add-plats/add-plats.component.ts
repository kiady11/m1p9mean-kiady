import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-plats',
  templateUrl: './add-plats.component.html',
  styleUrls: ['./add-plats.component.scss']
})
export class AddPlatsComponent implements OnInit {

  platForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
    this.platForm = this.formBuilder.group({
      nom: [''],
      prix: [''],
      ingredients: [''],
      restaurant: ['']
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): any {
    this.crudService.addPlat(this.platForm.value)
    .subscribe(() => {
        console.log('Data added successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/list-plats'))
      }, (err) => {
        console.log(err);
    });
  }

}
