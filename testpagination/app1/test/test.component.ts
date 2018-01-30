import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  parentMessage :any= [{'name':'hari','age':'22','address':'ban'},{'name': "kumar", 'age': "24", 'address': "hyd"}];
  locations: any= [{'name':'kumar','email':'kumar@gmail.com','location':'hyderabad'},{'name':'suresh','email':'suresh@gmail.com','location':'Banglore'},{'name':'hari','email':'hari@gmail.com','location':'Chennai'}];
  
constructor() { }
  
message:string;
receiveMessage($event) {
  this.message = $event
 //console.log(this.message );
}

  ngOnInit() {
     
   for(let i=0; i<=this.locations.length-1;i++)
   {
     //console.log(this.locations[i]);
   }

  }
}
