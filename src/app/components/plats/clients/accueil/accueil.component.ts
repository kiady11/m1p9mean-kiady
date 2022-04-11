import { Component, OnInit } from '@angular/core';
import { PlatServiceService } from 'src/app/service/plat-service.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  constructor(private service: PlatServiceService) { }
  foodData:any;
  ngOnInit(): void {
    this.foodData = this.service.food;
  }

}
