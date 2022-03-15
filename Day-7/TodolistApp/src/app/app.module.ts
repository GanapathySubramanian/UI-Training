import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CompletedListComponent } from './components/completed-list/completed-list.component';
import { PendingListComponent } from './components/pending-list/pending-list.component';
import { Router, RouterModule } from '@angular/router';
export const Approute:Routes =[
  { path:'',component:AppComponent}]
@NgModule({
  declarations: [
    AppComponent,
    CompletedListComponent,
    PendingListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Approute, {scrollPositionRestoration: 'enabled'}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
