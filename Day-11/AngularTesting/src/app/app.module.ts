import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ArithmeticComponent } from './components/arithmetic/arithmetic.component';
import { ColorChangeComponent } from './components/color-change/color-change.component';

@NgModule({
  declarations: [
    AppComponent,
    ArithmeticComponent,
    ColorChangeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
