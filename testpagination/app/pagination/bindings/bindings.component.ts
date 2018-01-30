import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindings',
  templateUrl: './bindings.component.html',
  styleUrls: ['./bindings.component.css']
})
export class BindingsComponent implements OnInit {

   name:string="Bijib soft";
   save:string="";
   update:string="";
   country:any="";
   clspn:number=3;
   unameval:string="kumar";
   location="hyderabad";
   
  constructor() { }

  ngOnInit() {
  }

  saveData(){
    this.save='savedata';
    this.update='';
    alert('Data added successfully');
   }
  updateData(){
    this.update='updatedata';
    this.save='';
    alert('Data updated successfully');
   }

   countryData(){
    this.country="country";
 }

   getColor(country) { 
    switch (country) {
      case 'UK':
        return 'green';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'red';
    }
  }

 

  people: any[] = [
    {
      "name": "Douglas  Pace",
      "country": 'UK'
    },
    {
      "name": "Mcleod  Mueller",
      "country": 'USA'
    },
    {
      "name": "Day  Meyers",
      "country": 'HK'
    },
    {
      "name": "Aguirre  Ellis",
      "country": 'UK'
    },
    {
      "name": "Cook  Tyson",
      "country": 'USA'
    }
  ];
   
}
