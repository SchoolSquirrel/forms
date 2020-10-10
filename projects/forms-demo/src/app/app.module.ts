import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolSquirrelFormsModule } from '@schoolsquirrel/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SchoolSquirrelFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
