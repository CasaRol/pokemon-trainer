import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CataloguePageComponent } from './components/catalogue-page/catalogue-page.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PokemonDetailsComponent } from './components/pokemon-details/pokemon-details.component';
import { TrainerPageComponent } from './components/trainer-page/trainer-page.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/"
  },
  {
    path: "",
    component: LandingPageComponent
  },
  {
    path: "login",
    component: LoginComponent
  },

  {
    path: "catalogue",
    component: CataloguePageComponent
  },
  {
    path: "catalogue/:name",
    component: PokemonDetailsComponent
  },
  {
    path: "trainer",
    component: TrainerPageComponent
  },
  {
    path: "**",
    component: NotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
