import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  constructor() { }
myString : string = "Hi Emlio from angular 11";
myNUmber : number = 55;
myImage  :  string = "https://2.bp.blogspot.com/-bzfT5KqVTJM/USU456rpPGI/AAAAAAAAEmE/-hbQUw7WhPQ/s1600/Fall+Street+Fashion+2013+for+Girls+(9).jpg";
myJson = {
  carName : "BMW",
  arId : 55555
};
  ngOnInit(): void {
  }

}
