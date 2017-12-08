import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './angular101.component.html',
  styleUrls: ['./angular101.component.css']
})
export class Angular101Component implements OnInit {

  public linkCollection = [{
    path: "http://www.chartjs.org/docs/latest/",
    display: "ChartJS"
  },
  {
    path: "https://valor-software.com/ng2-charts/",
    display: "Ng2 Charts"
  },
  {
    path: "https://material.io/icons/",
    display: "Material Icons"
  },
  {
    path: "https://material.angular.io/",
    display: "Angular Material"
  },
  {
    path: "https://angular.io/tutorial",
    display: "Tour of Heroes"
  },
  {
    path: "https://cli.angular.io",
    display: "Angular CLI"
  },
  {
    path: "https://blog.angular.io/",
    display: "Angular blog"
  }];

  constructor() { }

  ngOnInit() {
  }

}
