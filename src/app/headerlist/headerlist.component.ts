import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headerlist',
  templateUrl: './headerlist.component.html',
  styleUrls: ['./headerlist.component.css']
})
export class HeaderlistComponent implements OnInit {
  List = ['All',"Today's List","Customer Service","Registry","Gift Cards","Sell"]
  constructor() { }

  ngOnInit(): void {
  }

}
