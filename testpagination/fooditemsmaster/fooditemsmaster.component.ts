import { Component, OnInit , ViewChild,ChangeDetectorRef} from '@angular/core';
import { SubMenuCategoryService } from '../services/submenucategory.service';
import { ItemquantitypeService } from '../services/itemquantitytype.service';
import { VegSubTypeService } from '../services/vegsubtypes.service';
import { MenuCategoryService } from '../services/menucategory.service';
//import { FileSelectDirective, FileDropDirective, FileUploader } from 'ng2-file-upload/ng2-file-upload';
const URL = 'http://localhost:4200/uploads';
@Component({
  selector: 'app-fooditemsmaster',
  templateUrl: './fooditemsmaster.component.html',
  styleUrls: ['./fooditemsmaster.component.css'],
  providers:[SubMenuCategoryService,ItemquantitypeService,VegSubTypeService,MenuCategoryService]
  
})
export class FooditemsmasterComponent implements OnInit {
  @ViewChild("frm") frm;
  ItemName="";
  FoodType="";
  ItemCode="";
  itemDes="";
  Qform="";
  Qtype="";
  ItemSubCat="";
  Itemattribute="";
  item_image="";
  
  returnSubJson:any=[];
  returnquanJson:any=[];
  returnstypeJson:any=[];
  returnicatJson:any=[];

   // image code
path='';
public file_srcs: string[] = [];
public debug_size_before: string[] = [];
public debug_size_after: string[] = [];
  //public uploader:FileUploader = new FileUploader({url: URL});
  // image code
  constructor(private changeDetectorRef: ChangeDetectorRef,private _httpsubservice: SubMenuCategoryService,private _httpqaunservice: ItemquantitypeService,private _httpstypeservice: VegSubTypeService,private _httpicatservice: MenuCategoryService) { }
// image code start
  fileChange(input){
   this.readFiles(input.files); 
   }  
   readFile(file, reader, callback){
   reader.onload = () => { 
   callback(reader.result);
   this.item_image=reader.result;
   console.log(reader.result);
   }
   reader.readAsDataURL(file);
   }
    
   readFiles(files, index=0){
   // Create the file reader
   let reader = new FileReader();
   // If there is a file
   if(index in files){
   // Start reading this file
   this.readFile(files[index], reader, (result) =>{
   // Create an img element and add the image file data to it
   var img = document.createElement("img");
   img.src = result;
   // Send this img to the resize function (and wait for callback)
   this.resize(img, 100, 100, (resized_jpeg, before, after)=>{
   // For debugging (size in bytes before and after)
   this.debug_size_before.push(before);
   this.debug_size_after.push(after);
   // Add the resized jpeg img source to a list for preview
   // This is also the file you want to upload. (either as a
   // base64 string or img.src = resized_jpeg if you prefer a file).
   this.file_srcs.push(resized_jpeg);
   // Read the next file;
   this.readFiles(files, index+1);
   });
   });
   }else{
   // When all files are done This forces a change detection
   this.changeDetectorRef.detectChanges();
   }
   }
    
   resize(img, MAX_WIDTH:number, MAX_HEIGHT:number, callback){
   // This will wait until the img is loaded before calling this function
   return img.onload = () => {
   // Get the images current width and height
   var width = img.width;
   var height = img.height;
   // Set the WxH to fit the Max values (but maintain proportions)
   if (width > height) {
   if (width > MAX_WIDTH) {
   height *= MAX_WIDTH / width;
   width = MAX_WIDTH;
   }
   } else {
   if (height > MAX_HEIGHT) {
   width *= MAX_HEIGHT / height;
   height = MAX_HEIGHT;
   }
   }

   // create a canvas object
   var canvas = document.createElement("canvas");
   // Set the canvas to the new calculated dimensions
   canvas.width = width;
   canvas.height = height;
   var ctx = canvas.getContext("2d");
   ctx.drawImage(img, 0, 0,  width, height);
   // Get this encoded as a jpeg 
   // IMPORTANT: 'jpeg' NOT 'jpg'
   var dataUrl = canvas.toDataURL('image/jpeg');
   // callback with the results
   callback(dataUrl, img.src.length, dataUrl.length);
   };
   }
// image code End

  OnSubmit(data){
  console.log(data);
  }

  getAllSubMenuCategory(): void{
    this._httpsubservice.getsubMenu({"menu_sub_categoryid":"0"}).subscribe(data =>
    this.returnSubJson = data.data,
    error=>alert(error),
    () =>console.log("data displayed") 
    );
 }

 getAllitemQuantityType(): void{ 
  this._httpqaunservice.getItemQuantity({"item_quantity_type":"0"}).subscribe(data => this.returnquanJson =data.data,
  error=>alert(error),
  () =>console.log("data displayed")
  );
}
getAllvegsubtype(): void{
  // console.log("Hello fetch data ");        
   this._httpstypeservice.getMenu({"veg_subtype_id":"0"}).subscribe(data => this.returnstypeJson =data.data,
   error=>alert(error),
   () =>console.log("data displayed")
   );
}

getAllMenuCategory(): void{
  // console.log("Hello fetch data ");        
   this._httpicatservice.getMenu({"menu_categoryid":"0"}).subscribe(data => this.returnicatJson =data.data,
   error=>alert(error),
   () =>console.log("data displayed")
   );
}

  ngOnInit() {
    this.getAllSubMenuCategory();this.getAllitemQuantityType();this.getAllvegsubtype();this.getAllMenuCategory();
  }
}
