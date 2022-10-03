import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaForComponent } from './lista-for/lista-for.component';
import { MaterialsImportModule } from './materials-import/materials-import.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaForComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialsImportModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
