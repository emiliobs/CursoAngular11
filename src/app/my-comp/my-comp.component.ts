import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-comp',
  templateUrl: './my-comp.component.html',
  styleUrls: ['./my-comp.component.css']
})
export class MyCompComponent implements OnInit {

  myText: string = "Tis is my Text: Emilio";
  myInputText : string = "";
  MyText: string = "init";

  changeText = () =>
  {
      this.myText = "This text was changes for a new one!!!! - Amiliana";
  };

  chageEvent = (event:any) =>
  {
    console.log(event);
    console.log(event.srcElement.innerText)
    event.srcElement.innerText = "This has been changed";
  };

  onKeyPressed = (event:any) => {
   this.myInputText += event.target.value + '  && ';
  };

constructor() { }


ngOnInit(): void {
}

}
