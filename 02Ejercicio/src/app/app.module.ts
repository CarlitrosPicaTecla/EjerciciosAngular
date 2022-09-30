import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './index/index.component';
import { FormsModule } from '@angular/forms';
import { MaterialsImportModule } from './materials-import/materials-import.module';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialsImportModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
