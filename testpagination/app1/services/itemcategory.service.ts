import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class ItemCategoryService {
      url : string;
	constructor (private _http: Http){
	}
     
      saveItem(param){
		var headers = new Headers();
            param.query_type='set_data';
		var options=JSON.stringify(param);
		console.log(options);
            // headers.append("Authorization","YWRtaW46YWRtaW4=");
            headers.append("Content-Type", "application/json");
            this.url = "http://localhost:3000/hospitality/itemcategory";
             //console.log(this.url);
		return this._http.post(this.url, JSON.stringify(param), {
			headers: headers

		})
		.map(res=> res.json());
	}
      
      getItemCategories(param){
		var headers = new Headers();
		headers.append("Content-Type", "application/json");
            this.url = "http://localhost:3000/hospitality/itemcategory";
            return this._http.post(this.url, JSON.stringify(param), {headers: headers})
	      .map(res=> res.json());
	}
	
	updateItemcat(param){
            var headers = new Headers();
		//param.query_type='set_data';
		console.log(param);
            // headers.append("Authorization","YWRtaW46YWRtaW4=");
            headers.append("Content-Type", "application/json");
            this.url = "http://localhost:3000/hospitality/itemcategory";
             //console.log(this.url);
		return this._http.post(this.url, JSON.stringify(param), {
			headers: headers
		})
		.map(res=> res.json());	 
	}

	Deleteitem(param){
		var headers = new Headers();
		var tempData =JSON.stringify(param);
		console.log(param);
		headers.append('Content-Type', 'application/json');
		this.url = "http://localhost:3000/hospitality/itemcategory";
		return this._http.post(this.url, tempData, {
			headers: headers
		})
		.map(res=> res.json());
	}

}