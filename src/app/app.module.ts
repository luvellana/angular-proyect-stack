import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PersonaComponent } from './components/persona/persona.component';
import { FechaPipe } from './pipe/fecha.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PersonaComponent,
    FechaPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
