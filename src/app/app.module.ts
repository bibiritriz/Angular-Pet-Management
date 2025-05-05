import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';
import { OwnersComponent } from './owners/owners.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';
import { PetFormComponent } from './pet-form/pet-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    HomeComponent,
    PetsComponent,
    OwnersComponent,
    OwnerFormComponent,
    PetFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
