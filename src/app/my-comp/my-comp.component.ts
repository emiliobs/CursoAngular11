import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  ifError: boolean = true;

  myStyle = {
    'background-color' : "yellow",
    'color' : "black",
    'font-weight': 'bold',
    'text-align' : 'center',
    'font-size': this.ifError ?  "55px" : '5'
};

fethMyStyle = () =>{
  return {
    'color' : 'red',
    'font-weight ': 'bold',
    'text-align' : 'center',
    'font-size': this.ifError ?  "55px" : '5'
  };
}



constructor() { }


ngOnInit(): void {
}

}
