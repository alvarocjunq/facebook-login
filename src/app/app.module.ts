import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppService } from "./app.service";
import { FacebookComponent } from './facebook/facebook.component';

@NgModule({
  declarations: [
    AppComponent,
    FacebookComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
