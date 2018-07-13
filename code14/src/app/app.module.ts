import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DirectivangforComponent } from './directivangfor/directivangfor.component';
import { DirectivaifComponent } from './directivaif/directivaif.component';
import { DirectivangswitchComponent } from './directivangswitch/directivangswitch.component';
import { DirectivangclassComponent } from './directivangclass/directivangclass.component';
import { DirectivangStyleComponent } from './directivang-style/directivang-style.component';


@NgModule({
  declarations: [
    AppComponent,
    DirectivangforComponent,
    DirectivaifComponent,
    DirectivangswitchComponent,
    DirectivangclassComponent,
    DirectivangStyleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
