import { Component, OnInit, ViewChild } from '@angular/core';
import { ComponentService } from 'app/app.service';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ComponentService]
})
export class AppComponent {
  @ViewChild('frm') form;
  fname = "";
  lname = "";
  gender = "";
  email = "";
  hobbies = "";
  education = "";
  mobile = "";
  land = "";
  country = "";
  state = "";
  address = "";
  pincode = "";
  submitBtn: string = "Save";
  successJson: any = [];
  returnJson: any = [];
  uploadId: any = [];
  showMessage: any = false;
  showhobbies: any = [];
  selcountry: any = [];
  selstate: any = [];
  editId: any = [];

  hobbie = ["Playing Cricket", "Watching Tv", "Reading Books"];
  educations = ["SSC", "Inter", "Diploma", "B.Tech", "Degree", "MCA", "M.Tech", "MBA"];

  constructor(private httpService: ComponentService, private title: Title) {
    this.getValues();
    this.getcountrydata();
  }

  setTitle(newTitle: string) {
    this.title.setTitle(newTitle);
  }

  onSubmit(data) {
    data.hobbies = this.showhobbies;
    if (Object.keys(this.uploadId).length == 0) {
      this.insertValues(data);
    } else {
      this.updateValues(data, this.uploadId.id);
    }
  }

  posthobbies(event) {
    var index = this.showhobbies.indexOf(event.target.value);
    if (event.target.checked) {
      this.showhobbies.push(event.target.value);
    } else {
      if (index !== -1) {
        this.showhobbies.splice(index, 1);
      }
    }
  }

  insertValues(data) {
    this.httpService.insertData(data).subscribe(
      data => {
        this.successJson = data;
        this.getValues();
        this.showMessage = "Inserted";
        this.displayMsg();
      }
    );
  }

  getValues(): void {
    this.httpService.getData().subscribe(
      data => {
        this.returnJson = data.message;
      }
    );
  }

  editDataVal(id) {
    this.httpService.editData({ id: id }).subscribe(
      data => {
        this.editId = data.message;
        for (var i = 0; i < this.editId.length; i++) {
          this.uploadId = this.editId[i];
          this.fname = this.editId[i].fname;
          this.lname = this.editId[i].lname;
          this.gender = this.editId[i].gender;
          this.email = this.editId[i].email;
          this.hobbies = this.editId[i].hobbies;
          this.education = this.editId[i].education;
          this.mobile = this.editId[i].mobile;
          this.land = this.editId[i].land;
          this.country = this.editId[i].country;
          this.state = this.editId[i].state;
          this.address = this.editId[i].address;
          this.pincode = this.editId[i].pincode;
          this.submitBtn = "Edit";
          this.postCountryid(this.editId[i].country);
        }
      }
    );
  }

  updateValues(data, id) {
    this.httpService.updateData({ data: data, id: id }).subscribe(
      data => {
        this.successJson = data
        this.getValues();
        this.showMessage = "Updated";
        this.displayMsg();
      }
    );
  }

  selecthobbies(val) {
    // console.log(val);
    var selhobb = "";
    for (var i = 0; i < this.returnJson.length; i++) {
      if (this.returnJson[i].hobbies == val) {
        selhobb = "checked";
      }
    }
  }
  selecteducation(val) {
    console.log(val);
    var seledu = "";
    for (var i = 0; i < this.returnJson.length; i++) {
      if (this.returnJson[i].education == val) {
        seledu = "selected";
      }
      return seledu;
    }
  }

  deleteValues(id) {
    this.httpService.deleteData({ id: id }).subscribe(
      data => {
        this.successJson = data
        this.getValues();
        this.showMessage = "Deleted";
        this.displayMsg();
      }
    );
  }

  getcountrydata() {
    this.httpService.getcountry().subscribe(
      data => {
        this.selcountry = data.message;
      }
    )
  }

  postCountryid(id) {
    this.httpService.postcountryid({ id: id }).subscribe(
      data => {
        this.selstate = data.message;
      }
    );
  }

  displayMsg() {
    setTimeout(function () {
      this.showMessage = false;
    }.bind(this), 3000);
  }

  button() {
    this.submitBtn = "Save";
  }

  resetId() {
    this.uploadId = [];
    this.button();
    // window.location.reload();
  }
}