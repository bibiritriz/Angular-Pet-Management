import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PetsComponent } from './pets/pets.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { OwnersComponent } from './owners/owners.component';
import { OwnerFormComponent } from './owner-form/owner-form.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'pets', component: PetsComponent
  },
  {
    path: 'pet/new', component: PetFormComponent
  },
  {
    path: 'pet/edit/:id', component: PetFormComponent
  },
  {
    path: 'owners', component: OwnersComponent
  },
  {
    path: 'owner/new', component: OwnerFormComponent
  },
  {
    path: 'owner/edit/:id', component: OwnerFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
