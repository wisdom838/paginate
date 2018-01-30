import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemCategoryService } from '../services/itemcategory.service';

@Component({
  selector: 'app-itemcategory',
  templateUrl: './itemcategory.component.html',
  styleUrls: ['./itemcategory.component.css'],
  providers: [ItemCategoryService]
})
export class ItemcategoryComponent implements OnInit {
 @ViewChild('frm') form;
  idmember="";
  itemcat="";
  successJson: any= [];
  returnJson: any = [];
  submitbtn:string="Save";
  buttonClass: string='btn btn-save';
  alert_class="alert-success";
  editid:any="";
  updateId: any= [];
  showMessage: any= false;
  errordata="";

constructor(private _httpService: ItemCategoryService) { 
  this.getAllItemCategories();
}

onSubmit(data){
  if(Object.keys(this.updateId).length==0){
   this.saveValues(data);
  }
  else{
    //console.log(this.updateId.item_category_id);
    this.updateValues(data,this.updateId.item_category_id);	
  }

}

saveValues(data){
    //this.saveValues(data);
    //console.log(data);
 this._httpService.saveItem(data).subscribe(
  data => {
                  this.successJson = data;
                  if(this.successJson.status===true){
                  
                  this.getAllItemCategories();
                  this.alert_class="alert-success";
                  //this.showMessage= true;
                  this.displayMessage();
              }
            //   else if(this.successJson.status===false){
               
            //     this.getAllItemCategories();
            //      this.errordata=this.successJson.errors[0].msg;
            //     //this.showMessage= true;
            
            // }
              },
            error=>alert(error),
            () =>console.log("finished")
           );
          }


          getAllItemCategories(): void{
            // console.log("Hello fetch data ");
            
             this._httpService.getItemCategories({"query_type":"fetch_data","memberid":"1234564","item_category_id":"0"}).subscribe(data => this.returnJson =data.data,
             error=>alert(error),
             () =>console.log("data displayed")
             );
          }

  getItemEdit(rec){
    this.updateId = rec;
    //console.log(data);
    this.submitbtn="Update";
    this.idmember=rec.created_by;
    this.itemcat=rec.item_category_name;
    //console.log("update function");
      //rawdata={"query_type":"set_data","memberid":"74125896","item_category":"Beverages555","item_category_id":"2"};
         }


         updateValues(data,id){
//console.log(data.item_category);

  this._httpService.updateItemcat({"query_type":"set_data","memberid":"12345678","item_category":data.item_category,"item_category_id":id}).subscribe(
  data => {
                  this.successJson = data;
                  if(this.successJson.status===true){
                    this.getAllItemCategories();
                    this.alert_class="alert-success";
                    //this.showMessage= true;
                    this.displayMessage();
                    

              }
              },
          error=>alert(error),
          () =>console.log("updated")
          );
}

displayMessage(){
    this.showMessage= true;
      setTimeout(function() {
     this.showMessage = false;
     this.successJson={};
     this.updateId = {};
     
 }.bind(this), 3000);
}

changeButton(){
   this.submitbtn= "save";
   this.buttonClass= "btn btn-save";
}
resetFunction(){
  
  this.updateId=[];
  this.form.reset();
  this.form.controls['item_category'].setValue('');
  // this.form.controls['is_hospital'].setValue(1);
  this.changeButton();
 
}


deleteItem(id){
  //console.log({"query_type":"del_data","memberid":"1234564","item_category_id":id});
 this._httpService.Deleteitem({"query_type":"del_data","memberid":"1234564","item_category_id":id}).subscribe(
   
  data => {
    this.successJson = data;
    if(this.successJson.status===true){
      this.getAllItemCategories();
      this.displayMessage();
}
},
error=>alert(error),
() =>console.log("deleted")
);
    }
 ngOnInit() {

  }

}
