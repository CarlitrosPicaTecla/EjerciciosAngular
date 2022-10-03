import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialsImportModule } from './materials-import/materials-import.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableListsComponent } from './ordenar/table-lists/table-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    TableListsComponent
  ],
  imports: [
    BrowserModule,
    MaterialsImportModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
