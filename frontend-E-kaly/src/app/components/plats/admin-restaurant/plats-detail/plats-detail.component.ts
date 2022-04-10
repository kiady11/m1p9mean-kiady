import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlatServiceService } from 'src/app/service/plat-service.service';

@Component({
  selector: 'app-plats-detail',
  templateUrl: './plats-detail.component.html',
  styleUrls: ['./plats-detail.component.scss']
})
export class PlatsDetailComponent implements OnInit {

  getId: any;
  updateForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private activatedRoute: ActivatedRoute,
    private platService: PlatServiceService
  ) {
    this.getId = this.activatedRoute.snapshot.paramMap.get('id');

    this.platService.getPlat(this.getId).subscribe(res => {
      this.updateForm.setValue({
        nom: res['nom'],
        prix: res['prix'],
        ingredients: res['ingredients'],
        restaurant: res['restaurant']
      });
    });

    this.updateForm = this.formBuilder.group({
      nom: [''],
      prix: [''],
      ingredients: [''],
      restaurant: ['']
    })
   }

  ngOnInit(): void {
  }

  onUpdate(): any {
    this.platService.updatePlat(this.getId, this.updateForm.value)
    .subscribe(() => {
        console.log('Data updated successfully!')
        this.ngZone.run(() => this.router.navigateByUrl('/list-plats'))
      }, (err) => {
        console.log(err);
    });
  }



}
