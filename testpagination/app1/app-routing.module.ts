// modules
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

//Components
import { AppComponent } from './app.component';
import { ItemcategoryComponent } from './itemcategory/itemcategory.component';
import { TestComponent } from './test/test.component';
import { TestchildComponent } from './testchild/testchild.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';

// For Routing
const routing = [
       {
         path:'', 
         redirectTo: 'home', 
         pathMatch: 'full'
       },
       {
       path:'home',
       component: HomeComponent

       },
       {
         path: 'items',
         component: ItemcategoryComponent
       },
       {
         path:'test', 
         component:TestComponent
       }, 
       {
          path:'testchild', 
          component:TestchildComponent
       },
       {
         path: 'dashboard',
         loadChildren: 'app/dashboard/dashboard.module#DashboardModule'
       },
       {
        path:'**',
        component:NotfoundComponent

       }
     ];
    
@NgModule({
      imports: [RouterModule.forRoot(routing)],
      exports: [RouterModule]
    })
    export class AppRoutingModule {}