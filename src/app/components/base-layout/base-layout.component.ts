import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss']
})
export class BaseLayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  selected  = "six";
  
  max = 300000;
  min = 0;
  max2 = 100000;
  min2 = 0;
  
  
  gridsize: any = 0;
  gridsizeSecond:any = 0;
  


}
