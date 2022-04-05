import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/service/crud.service';


@Component({
  selector: 'app-list-plats',
  templateUrl: './list-plats.component.html',
  styleUrls: ['./list-plats.component.scss']
})
export class ListPlatsComponent implements OnInit {

  Plats:any = [];
  
  constructor( private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.getPlats().subscribe(res => {
      console.log(res)
      this.Plats =res;
    }); 
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.crudService.deletePlat(id).subscribe((res) => {
        this.Plats.splice(i, 1);
      })
    }
  }

}
