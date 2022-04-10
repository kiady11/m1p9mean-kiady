import { Component, OnInit } from '@angular/core';
import { PlatServiceService } from 'src/app/service/plat-service.service';


@Component({
  selector: 'app-list-plats',
  templateUrl: './list-plats.component.html',
  styleUrls: ['./list-plats.component.scss']
})
export class ListPlatsComponent implements OnInit {

  Plats:any;

  constructor( private platService: PlatServiceService) { }

  ngOnInit(): void {
    // this.platService.getPlats().subscribe(res => {
    //   console.log(res)
    //   this.Plats =res;
    // });
    this.Plats = this.platService.getPlats();
  }

  delete(id:any, i:any) {
    console.log(id);
    if(window.confirm('Do you want to go ahead?')) {
      this.platService.deletePlat(id).subscribe((res) => {
        this.Plats.splice(i, 1);
      })
    }
  }

}
