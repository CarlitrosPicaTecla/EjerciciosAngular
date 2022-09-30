import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MaterialsImportModule } from './materials-import/materials-import.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormularioRegistroComponentComponent } from './formulario-registro-component/formulario-registro-component.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, FormularioRegistroComponentComponent],
  imports: [
    BrowserModule,
    MaterialsImportModule,
    BrowserAnimationsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
