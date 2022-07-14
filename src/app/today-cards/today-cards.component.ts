import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-today-cards',
  templateUrl: './today-cards.component.html',
  styleUrls: ['./today-cards.component.css']
})
export class TodayCardsComponent implements OnInit {
  List = ["Today's Deals","Coupons","Renewed Deals","Outlet","Wearhouse Deals","Treasure Truck"]
  constructor() { }

  ngOnInit(): void {
  }

}
