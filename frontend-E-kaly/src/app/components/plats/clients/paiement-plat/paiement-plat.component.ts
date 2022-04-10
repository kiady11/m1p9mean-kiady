import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlatServiceService } from 'src/app/service/plat-service.service';

@Component({
  selector: 'app-paiement-plat',
  templateUrl: './paiement-plat.component.html',
  styleUrls: ['./paiement-plat.component.scss']
})
export class PaiementPlatComponent implements OnInit {

  constructor(private param:ActivatedRoute,private service: PlatServiceService) { }
  getMenuId:any;
  menuData:any;

  ngOnInit(): void {
    this.getMenuId = this.param.snapshot.paramMap.get('id');
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
    {
      this.menuData =  this.service.food.filter((value)=>{
          return value.id == this.getMenuId;
        });
        console.log(this.menuData,'menudata>>');

    }

  }

}
