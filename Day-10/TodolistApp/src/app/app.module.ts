import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { NavComponent } from './components/nav/nav.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TexttransformPipe } from './pipes/texttransform.pipe';
import { ActivatedRoute, RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiginInComponent } from './components/sigin-in/sigin-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
const routes:Routes=[
  {path:'',component:SiginInComponent},
  {path:'addtask',component:TodoFormComponent},
  {path:'todo/:id',component:TodoListComponent},
  {path:'signin',component:SiginInComponent},
  {path:'signup',component:SignUpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    TodoFormComponent,
    NavComponent,
    TodoListComponent,
    TexttransformPipe,
    SiginInComponent,
    SignUpComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
      progressAnimation:'increasing',
    }),
    FormsModule,
    HttpClientModule,
    NgbModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
