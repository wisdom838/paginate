import { Component, OnInit,Input,Output } from '@angular/core';
import { EventEmitter } from '@angular/core/src/facade/async';

@Component({
  selector: 'app-testchild',
  templateUrl: './testchild.component.html',
  styleUrls: ['./testchild.component.css']
})
export class TestchildComponent implements OnInit {
  @Input() childMessage: any;

  message:string="BIJIB SOFT";
  @Output() messageEvent =new EventEmitter<string>();
  
   items={"item1":"itemA","item2":"itemB","item3":"itemC","item4":"itemD"};

  constructor() { }

  ngOnInit() {
   if(this.childMessage!=undefined){
    console.log(this.childMessage["0"].address);
  }
  //console.log(this.items);

  }

  sendmessage(){
       this.messageEvent.emit(this.message);
      // console.log(this.message)
  }


}
