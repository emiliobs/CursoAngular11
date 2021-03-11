import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {
myVar="myClass";
isStyleActive: boolean = true;
isSpecialActive: boolean =  false;
isFontClassActive: boolean = true;
isColorClassActive : boolean= true;
styleCheck= {
 specialClass: this.isSpecialActive,
 fontClass : this.isFontClassActive,
 colorClass : this.isColorClassActive
};

 getClass (){
 return "myBlueClass";
};

  constructor() { }


  ngOnInit(): void {
  }

}
