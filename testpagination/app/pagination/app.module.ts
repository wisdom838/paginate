
//import angular modules
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpModule } from '@angular/http';
// By default, the app generated by ng init will include the FormsModule, here we’re requiring the ReactiveFormsModule as well
import { FormsModule , ReactiveFormsModule} from '@angular/forms';

// import services and components
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './services/posts.service';
import { RegisterComponent } from './register/register.component';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { PagerService } from './services/pager.service';
import { BindingsComponent } from './bindings/bindings.component';

// Define the routes
const Routes = [
 {
     path: '',
     redirectTo: 'posts',
     pathMatch: 'full'
 },
  {
    path: 'posts',
    component: PostsComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'bindings',
    component: BindingsComponent
  }

];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    RegisterComponent,
    FieldErrorDisplayComponent,
    BindingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(Routes) // Add routes to the app
  ],
  providers: [PostsService,PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }

