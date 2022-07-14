import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-left-content',
  templateUrl: './left-content.component.html',
  styleUrls: ['./left-content.component.css']
})
export class LeftContentComponent implements OnInit {
  List = ["Amazon Devices",
    'Arts, Crafts & Sewing',
    'Automotive & Motorcycle',
    'Baby',
    'Baby Clothing & Accessories',
    'Beauty',
    'Birds',
    'Books',
    "Boys Fashion",
    'Camera & Photo',
    'Cat Beds & Furniture',
    'Cat Flea & Tick Treatment',
    'Cat Food',
    'Cat Toys',
    'Cat Treats',
    'Cell Phones & Accessories',
    'Computers & Accessories',
    'Costumes & Accessories',
    'Dog Flea & Tick Treatment',
    'Baby Clothing & Accessories',
    'Beauty',
    'Birds',
    'Books',
    "Boys' Fashion",
    'Camera & Photo',
    'Cat Beds & Furniture',
    'Cat Flea & Tick Treatment',
    'Cat Food',
    'Cat Toys',
    'Cat Treats',
    'Cell Phones & Accessories',
    'Computers & Accessories',
    'Costumes & Accessories',
    'Dog Flea & Tick Treatment',
    'Baby Clothing & Accessories',
    'Beauty',
    'Birds',
    'Books',
    "Boys' Fashion",
    'Camera & Photo',
    'Cat Beds & Furniture',
    'Cat Flea & Tick Treatment',
    'Cat Food',
    'Cat Toys',
    'Cat Treats',
    'Cell Phones & Accessories',
    'Computers & Accessories',
    'Costumes & Accessories',
    'Dog Flea & Tick Treatment',
  ]
  Price = ["All",
  'Under $25',
  '$25 to $50',
  '$50 to $100',
  '$100 to $200',
  '$200 & Above']
  Discount = [
    'All deals',
    '10% off or more',
    '25% off or more',
    '50% off or more',
    '70% off or more']

  constructor() { }

  ngOnInit(): void {
  }

}
