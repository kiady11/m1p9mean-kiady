import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserServiceService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  userForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private userService: UserServiceService
  ) {
    this.userForm = this.formBuilder.group({
      email: [''],
      mdp: [''],
      confirmation: [''],
      nom: [''],
      prenom: ['']
    });
   }

  ngOnInit(): void {
  }

  onSubmit(): any {
    if(this.userForm.value.mdp != this.userForm.value.confirmation){
      return console.log("invalid password");

    } else {
      this.userService.inscription(this.userForm.value).subscribe(() => {
        console.log('Data added successfully!');
        this.ngZone.run(() => this.router.navigateByUrl('/accueil'));
      })
    }
  }

}
