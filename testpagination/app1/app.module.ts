import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';     // RoutingModule

// components
import { AppComponent } from './app.component';
import { ItemcategoryComponent } from './itemcategory/itemcategory.component';
import { TestComponent } from './test/test.component';
import { TestchildComponent } from './testchild/testchild.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NotfoundComponent } from './notfound/notfound.component';

import { HomeComponent } from './home/home.component';



// Define the routes

@NgModule({
  declarations: [
    AppComponent,
    ItemcategoryComponent,
    TestComponent,
    TestchildComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    NotfoundComponent,
    HomeComponent
     ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule, // Add routes to the app
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
