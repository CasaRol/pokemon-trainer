import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CataloguePageComponent } from './components/catalogue-page/catalogue-page.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonCardComponent } from './components/pokemon-card/pokemon-card.component';
import { TrainerPageComponent } from './components/trainer-page/trainer-page.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CataloguePageComponent,
    HeaderComponent,
    PokemonCardComponent,
    TrainerPageComponent,
    PokemonDetailsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
