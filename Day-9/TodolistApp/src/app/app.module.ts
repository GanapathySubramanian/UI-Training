import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { ListComponent } from './components/list/list.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule } from '@angular/forms';
import { TexttransformPipe } from './pipes/texttransform.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    ListComponent,
    TexttransformPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut:2000,
      progressBar:true,
      progressAnimation:'increasing',
    }),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
