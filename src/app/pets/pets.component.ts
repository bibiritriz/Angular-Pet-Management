import { Component, OnInit } from '@angular/core';
import { Pet } from './pet';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-pets',
  standalone: false,
  templateUrl: './pets.component.html',
  styleUrl: './pets.component.css',
})
export class PetsComponent implements OnInit {
  pets: Pet[] = [];

  constructor(private readonly petService: PetService) {}

  ngOnInit(): void {
    this.getDataPet();
  }

  getDataPet() {
    this.petService.getPets().subscribe({
      next: (pets) => (this.pets = pets),
    });
  }

  deletePet(id: number) {
    this.petService.deletePet(id).subscribe(() => this.getDataPet());
  }
}
